const Joi = require("joi")

const usersSchema = Joi.object({
    userName: Joi.string().pattern(new RegExp('^[a-zA-Z]')).min(2).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "il", "co", "gov"] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]')).min(3).max(15).required()
})

const usersValidation = async (req, res, next) => {
    try {
        const { email, userName, password } = req.body
        if (!email) {
            // validation here in Login
            const check = await validator({ userName, password })
            if (check === "userName") return res.json({ message: "Invalid User Name", key: "userName" })
            if (check === "password") return res.json({ message: "Password must be 3-15 chars long", key: "password" })
        } else {
            // validation here in Register
            const check = await validator({ email, userName, password })
            if (check === "email") return res.json({ message: "Invalid email", key: "email" })
            if (check === "userName") return res.json({ message: "Invalid User Name", key: "userName" })
            if (check === "password") return res.json({ message: "Invalid password", key: "password" })
        }
    }
    catch {
        return res.json({ message: "Something went wrong. Please try again later" })
    }
    next();
}

const validator = async (obj) => {
    const { error } = usersSchema.validate(obj);
    if (error) {
        // console.log(error, "error message")
        // console.log(error.details[0].context.key)
        return error.details[0].context.key
    }
}


module.exports = usersValidation;

































// const Joi = require("joi");

// const usersSchema = Joi.object({
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', `co.il`, `gov`] } }).required(),
//     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]')).min(3).max(20).required()
// })

// function usersValidation(req, res, next) {
//     const { error } = usersSchema.validate(req.body);
//     if (error) {
//         console.log(error.message)
//         return res.json({ message: "email/userName/password must be a valid" })
//     }
//     next();
// }

// module.exports = usersValidation;
