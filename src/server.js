const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app = express()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("App")
})

app.listen(8080, () => {
    console.log("server running on port 8080.")
})

