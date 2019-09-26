const {sum} = require("./helper");
const http = require("http");

let m = sum(3,4);

const hi = http.createServer( (req, res) =>{
    res.end("que te hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hacee hace?");
});

hi.listen(3000);


console.log(m);