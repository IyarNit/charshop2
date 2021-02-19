const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/characterDetails", async (req, res, next) => {
    // const { userName, charName, detail, detailtype }
    // const { userName, charName, profession, race, level, background, alignment, xp } = req.body


    console.log(req.body, "req.body")
    const userName = req.body.userName
    const name = req.body.charName
    const detail = req.body.detail
    const detailType = req.body.detailtype
    try {
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
        const foundCharacters = await collection.find({ userName: userName, name: name }).toArray();
        console.log(foundCharacters, "foundCharacters")

        if (detailType === "name") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "name": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "background") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "background": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "class") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "profession": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "race") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "race": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "level") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "level": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "xp") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "xp": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
        if (detailType === "alignment") {
            collection.updateOne(
                { userName: userName, name: name },
                {
                    "$set":
                    {
                        "alignment": detail
                    }
                }
            )

            return res.json({ message: "update succesful" })
        }
    }

    catch (error) {
        console.log("characterDetails catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})



module.exports = router