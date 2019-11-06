const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutesd = require("./routes/post");
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

//MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => console.log("DB Connected :v"));

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
