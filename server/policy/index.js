const Joi = require('@hapi/joi')
const policy = {}



//contact form validation
policy.sendEmail = (req, res, next) => {
    const schema = Joi.object({
        subject: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        text: Joi
            .string()
            .min(3)
            .max(200)
            .required(),
        from: Joi
            .string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'pt', 'com.pt'] } }),
    })

    const formData = { from: req.body.from, subject: req.body.subject, text: req.body.text }
    const { error, value } = schema.validate(formData)

    if (error) {
        switch (error.details[0].context.key) {
            case 'from':
                res.status(400).send({
                    error: 'Preencha devidamente o email.'
                })
                break
            case 'subject':
                res.status(400).send({
                    error: 'Preencha devidamente o assunto.'
                })
                break
            case 'text':
                res.status(400).send({
                    error: 'Preencha devidamente a mensagem.'
                })
                break
            default:
                res.status(400).send({
                    error: 'Formulário de contacto inválido.'
                })
                break
        }
    } else {
        next()
    }
}



//newsletter form validation
policy.Newsletter = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        lastName: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        email: Joi
            .string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'pt', 'com.pt'] } }),
    })

    const formData = { email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName }
    const { error, value } = schema.validate(formData)

    if (error) {
        switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'Preencha devidamente o email.'
                })
                break
            case 'firstName':
                res.status(400).send({
                    error: 'Preencha devidamente o primeiro nome.'
                })
                break
            case 'lastName':
                res.status(400).send({
                    error: 'Preencha devidamente o último nome.'
                })
                break
            default:
                res.status(400).send({
                    error: 'Formulário da newsletter inválido.'
                })
                break
        }
    } else {
        next()
    }
}






module.exports = policy