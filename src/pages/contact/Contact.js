import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { Field, Button } from "../../components";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState([
        { name: "first name", value: "", label: "first name", type: "string", message: "", invalidFeedback: false },
        { name: "last name", value: "", label: "last name", type: "string", message: "", invalidFeedback: false },
        {
            name: "email",
            value: "",
            label: "email",
            type: "email",
            message: "",
            invalidFeedback: false,
            required: true,
        },
        { name: "subject", value: "", label: "subject", type: "string", message: "", invalidFeedback: false },
        { name: "message", value: "", label: "message", type: "string", message: "", invalidFeedback: false },
    ]);

    const [alert, setAlert] = useState({
        type: "success",
        message: "",
    });
    const [alertTimeout, setAlertTimeout] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { globalOnSubmitHandler, globalOnChangeHandler } = useGlobalContext();

    const createAlert = ({ success, message }) => {
        setAlert({ ...alert, message, type: success ? "dark" : "danger" });
        clearTimeout(alertTimeout);
        setAlertTimeout(setTimeout(() => setAlert({ ...alert, message: "" }), 10000));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { decodedForm } = globalOnSubmitHandler(form, setForm);

        if (!decodedForm) return setIsSubmitted(true);
        console.log(decodedForm);
        createAlert({ success: true, message: "dark" });
        // setIsLoading(true);

        // fetch.login(decodedForm, (err, data) => {
        //     createAlert(data || err)
        //     if (data) {
        //         setTimeout(() => {
        //             auth.login(data);
        //             setAuth({ ...auth, state: auth.getState() });
        //         }, 3000);
        //     }

        //     setIsLoading(false);
        //     setIsSubmitted(false);
        // });
    };

    const onChangeHandler = (e, field) => {
        globalOnChangeHandler(e, field, form, setForm);
    };

    const createRipple = (event) => {
        if (event.type === "keydown" && event.keyCode !== 32) return;

        const button = event.currentTarget;
        const btnRect = button.getBoundingClientRect();

        const circle = document.createElement("span");
        const diameter = Math.max(btnRect.width, btnRect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - btnRect.left - radius}px`;
        circle.style.top = `${event.clientY - btnRect.top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        button.appendChild(circle);
    };
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="contact">
                <div className="container">
                    <div className="contact-center">
                        <div className="details">
                            <h2 className="contact-title">contact</h2>
                            <p className="contact-description">Looking forward to hearing from you</p>

                            <div className="info">
                                <h6 className="info-title">phone</h6>
                                <a href="#" className="info-link">
                                    123-456-7890
                                </a>
                            </div>
                            <div className="info">
                                <h6 className="info-title">email</h6>
                                <a href="#" className="info-link">
                                    example@gmai.com
                                </a>
                            </div>
                        </div>

                        <form className="form">
                            {form.map((field, index) => (
                                <Field key={index} {...{ field, ...field, isSubmitted, onChangeHandler }} />
                            ))}
                            <div className="wrapper">
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        className="form-control"
                                        type='string'
                                        value={form[4].value}
                                        onChange={(e) => onChangeHandler(e, form[4])}
                                    ></textarea>
                                      <div className={`alert alert-danger d-${form[4].invalidFeedback && isSubmitted ? "block" : "none"}`}>{form[4].message}</div>
                                    <div
                                        className={`alert alert-success d-${
                                            !form[4].invalidFeedback && isSubmitted ? "block" : "none"
                                        }`}
                                    >
                                        looks good
                                    </div>
                                </div>

                                <button
                                    className=" btn btn-primary"
                                    onClick={(e) => e.preventDefault()}
                                    onMouseDown={(e) => {
                                        createRipple(e);
                                        onSubmitHandler(e);
                                    }}
                                >
                                    <div className="btn-inner">submit </div>{" "}
                                </button>
                            </div>
                            <div className={`alert alert-${alert.type} d-${alert.message ? "block" : "none"}`}>
                                Thanks for submitting!
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}
