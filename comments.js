// create web server
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const DATA_FILE_PATH = path.join(__dirname, "data.json");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/comments", (req, res) => {
    fs.readFile(DATA_FILE_PATH, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post("/api/comments", (req, res) => {
    fs.readFile(DATA_FILE_PATH, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        const comments = JSON.parse(data);
        const newComment = {
            id: Date.now(),
        };
    });
});