const express = require("express")
const app = express()
const PORT = 3000;
const apiRoute = require("./api/api")
const path = require("path")
const cors = require("cors")

app.use(express.json())
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute)
app.use(cors)
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)

});
