// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require('fs');
const data = require('../db/db.json')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './notes.html'))
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/api/notes', function (req, res) {
    res.json(data)
})

app.post('/api/notes', function (req, res) {
    fs.appendFile(data, req.body, function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
})




app.listen(PORT, () => console.log(`Example app listening on port localhost:${PORT}`))
