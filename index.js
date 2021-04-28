//* https://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs

const express = require('express');
const app = express();
let port = 3000;


const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mDB?authSource=admin"; //! private ip of VM with DB installed

//! fuser -k 8080/tcp will kill the process on the port.

app.get('/', (req, res) => {
    res.send("Welcome to the jungle!");
    console.log("Homepage");
})

app.get("/add", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mDB");
        const myobj = { name: "Johnny", profession: "actor" };
        dbo.collection("people").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("One document inserted");
            db.close()
        });
        // database insert/update or query
    });
})

app.listen(port, () => {
    console.log(`The app is up and listening at http://localhost:${port}`);
})