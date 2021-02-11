const pool = require("../pool/MongoConnection")
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.post("/characterDetails", async (req, res, next) => {
    try {
        // const { userName, email, password } = req.body
        console.log(req.body)

    }

    catch (error) {
        console.log("characterDetails catch error", error.message)
        return res.status(401).json({ message: "invalid request" })
    }
})



module.exports = router