const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutesd = require("./routes/post");
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();


let MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://gauss_najera:onceonceonce112@nodeapi-shard-00-00-s48ar.mongodb.net:27017,nodeapi-shard-00-01-s48ar.mongodb.net:27017,nodeapi-shard-00-02-s48ar.mongodb.net:27017/test?ssl=true&replicaSet=NodeAPI-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, 
    {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    function(err, client) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

//MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(() => console.log("DB Connected :v"))
.catch(() => console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRROR"));




mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})


app.use(morgan('dev'));
let i = true;
const usingMiddleware = (req, res, next) => {
    if (i) {
        console.log("you've got a new power");
        i = false;
    }
    else {
        console.log("middleware/applied");
    }
    next();
};

app.use(usingMiddleware);

app.use("/", postRoutesd);

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Running on port: ${port}`) });
