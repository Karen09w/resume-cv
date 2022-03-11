import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import { Field } from "../../components";

export default function Login() {
    const [form, setForm] = useState([
        { name: "email", value: "", label: "email adress", type: "string", message: "", invalidFeedback: false },
        { name: "password", value: "", label: "your password", type: "password", message: "", invalidFeedback: false },
    ]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const {  globalOnSubmitHandler, globalOnChangeHandler } = useContext(Context);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const { decodedForm } = globalOnSubmitHandler(form, setForm);
        if (!decodedForm) return setIsSubmitted(true);
        setIsSubmitted(false);
    };

    const onChangeHandler = (e, field) => {
        globalOnChangeHandler(e, field, form, setForm);
    };

    return (
        <section className="login">
            <div className="container">
                <h1 className="login-title">login screen</h1>
                <form onSubmit={onSubmitHandler}>
                    {form.map((field, index) => (
                        <Field key={index} {...{ field, ...field, isSubmitted, onChangeHandler }} />
                    ))}
                    <Link to="/register">sign up</Link>
                    <br />
                    <Link to="/forgot-password">forgot password</Link>
                    <hr />
                    <button className="btn btn-primary" type="submit" >
                        submit
                    </button>
                </form>
            </div>
        </section>
    );
}
