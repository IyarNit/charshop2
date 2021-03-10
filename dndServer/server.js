const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
// routes import
const logRegRoute = require("./routes/RegisterLogin")
const userAuth = require("./routes/userAuth")
const characters = require("./routes/characters")
const characterDetails = require("./routes/characterDetails")
const abilityMods = require("./routes/abilityMods")



// routes
app.use("/", logRegRoute);
app.use("/", userAuth);
app.use("/", characters);
app.use("/", characterDetails);
app.use("/", abilityMods);







app.listen(port, (err) => {
    if (err) console.log("listen error:", err.message)
    console.log(`dnd project server runs on port ${port}`)
});