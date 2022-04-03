import Joi from "joi";

export default function Validation() {
    this['first name'] = Joi.string().min(3).allow('')
    this['last name'] = Joi.string().min(3).allow('')
    this.subject = Joi.string().min(3).allow('')
    this.message = Joi.string().min(3).allow('')
    this.email = Joi.string()
        .min(3)
        .email({ tlds: { allow: false } }).required()
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
