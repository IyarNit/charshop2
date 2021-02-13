const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/characterDetails", async (req, res, next) => {
    // const { userName, charName, detail, detailtype }
    // const { userName, charName, profession, race, level, background, alignment, xp } = req.body


    console.log(req.body, "works")
    const userName = req.body.userName
    const charName = req.body.charName
    const detail = req.body.detail
    const detailType = req.body.detailtype
    try {
        const connectionToMongoDB = await pool();
        const collection = await connectionToMongoDB.db(process.env.DB_NAME).collection(process.env.CHARACTER_COLLECTION)
        const foundCharacters = await collection.find({ userName: userName, name: charName }).toArray();
        console.log(foundCharacters, "work in progress")
        if (detailType === "backGround") {
            collection.updateOne(
                { userName: userName, name: charName },
                {
                    "$set":
                    {
                        "backGround": detail
                    }
                }
            )
        }


        // "update succesful"
    }

    catch (error) {
        console.log("characterDetails catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})



module.exports = router