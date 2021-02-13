const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/characters", async (req, res, next) => {
    try {
        console.log(req.headers.username)
        const userName = req.headers.username
        // console.log(enemie)
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
        const foundCharacters = await collection.find({ userName: userName }).toArray();


        console.log(foundCharacters)

        if (!foundCharacters || foundCharacters.length === 0) return res.json({ message: "No Characters found. Create a New One!" })
        return res.json({ message: "Character Located", character: foundCharacters })
    } catch (error) {
        console.log("characters get catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})





router.post("/characters", async (req, res, next) => {
    try {
        // console.log(req.body)
        const { character } = req.body
        const { userName, name, profession, race, level } = character
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
        const characterToAdd = { userName: userName, characterName: name, class: profession, race: race, level: level }
        console.log(characterToAdd)
        const data = await collection.insertOne(character);
        if (data.length === 0) return res.json({ message: "data Fetch Error" })
        return res.json({ message: "Character Added", data: data })
    }

    catch (error) {
        console.log("characters post catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})


router.delete("/charactersDelete", async (req, res, next) => {
    try {
        console.log(req.body)
        const { character } = req.body
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
        const data = await collection.deleteOne(character);
        // if (data.length === 0) return res.json({ message: "data Fetch Error" })
        return res.json({ message: "Character Deleted", data: data })
    }

    catch (error) {
        console.log("characters post catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})


module.exports = router