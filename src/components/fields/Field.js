import React from "react";

export default function Field({
    field,
    type,
    name,
    value,
    label,
    required,
    invalidFeedback,
    isSubmitted,
    message,
    onChangeHandler,
}) {

    if(name == 'message') return ''
    return (
        <div className="col-sm-5">
            <label htmlFor={name} className="form-label">
                {label}
                {required && '*'}
            </label>
            
            <input
            autoComplete='off'
                className="form-control"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChangeHandler(e, field)}
            />
            <div className={`alert alert-danger d-${invalidFeedback && isSubmitted ? "block" : "none"}`}>{message}</div>
            <div
                className={`alert alert-success d-${
                    name !== "passwordConfirmation" && !invalidFeedback && isSubmitted ? "block" : "none"
                }`}
            >
                looks good
            </div>
        </div>
    );
}
