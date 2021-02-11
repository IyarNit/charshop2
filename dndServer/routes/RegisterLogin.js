const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
// const { route } = require("./userAuth");
const salt = "$2a$10$MxPcIeHj.YLc1dOwnykPiOZBs2Gzk91ydH9f2Q7GAIuRmvA/UxgSe"
const userValidation = require("../Validations/validateUser")

// activate this line to make validations work!
// router.use(userValidation)

router.post("/Register", async (req, res, next) => {
    try {
        const { userName, email, password } = req.body
        // console.log(req.body)
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.USERS_COLLECTION)
        const existingUsers = await collection.find({}).toArray();
        const findUserEmail = existingUsers.find((x) => { return x.email === email })
        const findUserUserName = existingUsers.find((x) => { return x.userName === userName })
        // console.log(findUserEmail, findUserUserName, "findUser")
        if (findUserUserName) return res.json({ message: "User Name Taken" })
        if (findUserEmail) return res.json({ message: "Email Taken" })
        if (!findUserEmail, !findUserUserName) {
            const user = { userName: userName, email: email, password: bcrypt.hashSync(password, salt), role: null }
            // const createCharacter = await characterCreation(user.email, user.userName)
            // if (!createCharacter) return res.json({ message: "Error has occured. Please Contact Support" })
            const data = await collection.insertOne(user);
            if (data.length === 0) return res.json({ message: "data Fetch Error" })
            return res.json({ message: "Register Success", data: data })
        }
    }
    catch (error) {
        console.log("getUsers catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})

router.post("/Login", async (req, res, next) => {
    try {
        const { userName, password } = req.body
        // console.log(req.body)
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.USERS_COLLECTION)
        const existingUsers = await collection.find({}).toArray();
        const findUser = existingUsers.find((x) => { return x.userName === userName && x.password === bcrypt.hashSync(password, salt) })
        // console.log(findUser, "findUser in login")
        if (findUser) {
            // console.log(findUser, "findUser in login")
            const jwtToken = await getJwt({ ...findUser, password: null })
            // console.log(jwtToken)
            // const getCharacter = await getChar(findUser.email)
            // if (!getCharacter) return res.json({ message: "Error has occured. Please Contact Support" })
            // return res.json({ message: "Login Succesful", token: jwtToken, user: { ...findUser, password: null }, character: getCharacter })
            return res.json({ message: "Login Succesful", token: jwtToken, user: { ...findUser, email: null, password: null } })
        }
    } catch (error) {
        console.log("userLogin catch error", error.message)
    }

})

const getJwt = async (u) => {
    return new Promise((resolve, reject) => {
        jwt.sign(u, process.env.SECRET, { expiresIn: "1h" }, (err, token) => {
            // Change expire in to "8h" after finalizing
            if (err) reject("error")
            resolve(token)
        })
    })
}



// DO NOT DELETE THIS!!!!!!!!!!!!!!!!

// const getChar = async (userEmail) => {
//     try {
//         const connectionToMongoDB = await pool();
//         const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
//         const data = await collection.find({ email: userEmail }).toArray()
//         if (!data) return null
//         return data[0]
//     }
//     catch (error) {
//         console.log(error.message, "in get character")
//     }

// }

// const characterCreation = async (email, userName) => {
//     try {
//         const connectionToMongoDB = await pool();
//         const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
//         const newCharacter = { email: email, userName: userName, maxHP: 50, currentHP: 50, currentWeapon: "" }
//         const data = await collection.insertOne(newCharacter);
//         if (!data) return null
//         return data
//     }
//     catch (error) {
//         console.log(error.message, "error in creating character (register)")
//     }
// }



// router.get("/getUsers", async (req, res, next) => {
//     try {
//         const connectionToMongoDB = await pool();
//         const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.USERSCOLLECTION)
//         const data = await collection.find({}).toArray();
//         // if (data.length === 0) return res.json({ message: "data Fetch Error" })
//         console.log(data)
//         return res.json({ message: "ok", data: data })
//     } catch (error) {
//         console.log("getUsers catch error", error.message)
//         return res.status(401).json({ message: "invalid request" })
//     }
// })


module.exports = router;
