import Joi from "joi";

export default function Validation() {
    this.name = Joi.string().min(3).required();
    this.email = Joi.string()
        .min(3)
        .email({ tlds: { allow: false } })
        .required();
    this.password = Joi.string().min(3).required();
    this.passwordConfirmation = Joi.string()
        // .any()
        .valid(Joi.ref("password"))
        .label("confirm password")
        .required()
        .options({ messages: { "any.only": "{{#label}} does not match" } });
}

Validation.prototype = {
    constructor: Validation,
    createValidation(obj) {
        const generatedSchema = {};
        for (let i in obj) generatedSchema[i] = this[i];
        const schema = Joi.object(generatedSchema).options({ abortEarly: false });
        return schema.validate(obj);
    },
};

export const validation = new Validation();
