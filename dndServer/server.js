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


// routes
app.use("/", logRegRoute);




app.listen(port, (err) => {
    if (err) console.log("listen error:", err.message)
    console.log(`dnd project server runs on port ${port}`)
});