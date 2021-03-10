const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();
// activate this line to make validations work!
// router.use(userValidation)

router.post("/getAbilityMods", async (req, res, next) => {
    try {
        // console.log("incoming")
        const { userName, charId } = req.body
        // console.log(userName, charId,"in get abil")
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.ABILITYMODS_COLLECTION)
        const foundCharacters = await collection.find({ userName: userName, charId: charId }).toArray();
        // console.log(foundCharacters, "foundCharacters")
        if (foundCharacters.length === 0) return res.json({ message: "Retrieval unsuccesful", data: null })
        return res.json({ message: "Retrieval succesful", data: foundCharacters })
    }
    catch (error) {
        console.log("ability mods get (post) catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})


router.post("/updateAbilityMods", async (req, res, next) => {
    try {
        const { userName, charId } = req.body
        // console.log(req.body, "updateAbilityMods")
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.ABILITYMODS_COLLECTION)
        const foundCharacters = await collection.find({ userName: userName, charId: charId }).toArray();
        console.log(foundCharacters, "foundCharacters")
        // console.log(foundCharacters.length, "length")
        const data = {
            userName: userName, charId: charId, abilities: req.body.abilities
        }
        // return
        if (foundCharacters.length === 0) {
            await collection.insertOne(data);
            return res.json({ message: "Update Successful" })

        } else {
            console.log(userName, charId)
            await collection.deleteOne({ userName: userName, charId: charId })
            await collection.insertOne(data);
            return res.json({ message: "Update Successful" })

        }
    }
    catch (error) {
        console.log("abilitymods POST catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})

module.exports = router