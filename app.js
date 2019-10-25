const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Aprovecha el martes de frutas y verduras");
 })

app.listen(3000)


const fs = require('fs');
const fileName = 'some.txt';

const errHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());



fs.readFile(fileName, (err,data) => {
    if(err) errHandler(err);
    dataHandler(data);
});

console.log("AHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");


const {sum} = require("./helper");

/// ---A WAY TO SEND SOMETHING TO A SERVER
const http = require("http");

const hi = http.createServer( (req, res) =>{
    res.end("que te hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hace?");
});

hi.listen(3001);


let m = sum(3,4);
console.log(m);