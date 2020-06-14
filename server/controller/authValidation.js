const Joi = require('@hapi/joi');





module.exports =  signUpValidation = (data) =>{
    const schema = Joi.object({
        fullName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
            userName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
            email: Joi.string()
            .alphanum()
            .email()
            .required(),
            password: Joi.string()
            .alphanum()
            .min(6)
            .max(30)
            .required(),
    })
    return schema.validate(data);
}


module.exports =  logInValidation = (data) =>{
    const schema = Joi.object({
            email: Joi.string()
            .alphanum()
            .email()
            .required(),
            password: Joi.string()
            .alphanum()
            .min(6)
            .max(30)
            .required(),
    })
    return schema.validate(data);
}



