const express = require("express");
const path = require("path");
const Rollbar = require("rollbar");

let rollbar = new Rollbar({
    accesstoken: "b6fb2533854847308b8a1a29bb1dce7d"
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express ();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    rollbar.info("HTML file served successfully!");
})

const port = process.env.POT || 4545;

app.listen(port, () => {
    console.log(`They're taking the hobbits to ${port}!`);
})