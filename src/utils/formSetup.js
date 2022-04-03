import { validation } from "./validate.js";

export default (function formSetup() {
    const decodeForm = (form) => {
        const decodeForm = {};
        form.forEach((field) => (decodeForm[field.name] = field.value) || null);
        return decodeForm;
    };

    const globalOnSubmitHandler = (form, setForm) => {
        const decodedForm = decodeForm(form);
        const { error } = validation.createValidation(decodedForm);
        if (!error) return { decodedForm };
        const tempForm = [...form];
        error.details.forEach((detail) => {
            const fieldIndex = form.findIndex((field) => field.name === detail.path[0]);
            tempForm[fieldIndex] = { ...form[fieldIndex] };
            tempForm[fieldIndex].invalidFeedback = true;
            tempForm[fieldIndex].message = detail.message;
        });
        setForm(tempForm);
        return { error };
    };

    const globalOnChangeHandler = (e, field, form, setForm, decodedForm) => {
        const { name, value } = e.target;
        if (!decodedForm) decodedForm = { [name]: value };
        const { error } = validation.createValidation(decodedForm);
     

        const tempForm = [...form];
        const index = tempForm.indexOf(field);
        tempForm[index] = { ...field };
        tempForm[index].value = value;
        tempForm[index].invalidFeedback = error ? true : false;
        tempForm[index].message = error ? error.details[1]?.message || error.details[0]?.message : "";
        setForm(tempForm);
        
    };

    return { decodeForm, globalOnSubmitHandler, globalOnChangeHandler };
})();
