
// const axios = require("axios");
// const urlAPI = "https://randomuser.me/api/"

// // async function api_user() {

// //     const { data } = await axios.get(urlAPI);
// //     console.log(data);
// //     const { results } = data
// //     //console.log('this is resutls', results)
// //     const final_user = formated_user(results[0])
// //     console.log(final_user)

// // };

// // function formated_user(user) {
// //     //console.log('user in func formated', user)
// //     const { title, first, last } = user.name
// //     const my_user = `This is ${title}. ${first} ${last}`
// //     return my_user
// // }
// console.log(urlAPI);
// const data = axios.get(urlAPI)
// console.log(data);
// // async function api_user() {

// // }

// // api_user()

// //* https://www.tutorialsteacher.com/nodejs/access-mongodb-in-nodejs

// const express = require('express');
// const app = express();
// let port = 3000;


// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://10.20.0.5:27017/mDB?authSource=admin"; //! private ip of VM with DB installed



// app.get('/', (req, res) => {
//     res.send("Welcome to the jungle");
// })

// app.get("/add", (req, res) => {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         const db = db.db(mDB); //! the name of my DB
//         const myobj = [
//             { id: 1, name: "Carry"},
//             { id: 2, name: "Samantha"},
//             { id: 3, name: "Miranda"},
//             { id: 4, name: "Charlotte"},
//         ];
//         db.collection("soap").insertMany(myobj, function (err, res) {
//             if (err) throw err;
//             console.log("Number of objects inserted: " + res.insertedCount);
//             db.close();
//         });
//     });
//     res.send("Insertion succeeded");
// })

// app.listen(port, () => {
//     console.log(`The app is up and listening at http://localhost:${port}`);
// })