const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutesd = require("./routes/post");
const morgan = require('morgan');
const bodyParser = require('body-parser');
// dotenv.config();

const MONGO_URI = "mongodb+srv://gauss_najera:onceonceonce112@nodeapi-s48ar.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    MONGO_URI,
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
app.use(bodyParser.json());
app.use("/", postRoutesd);

// LO QUE ERA ANTES  =====>  const port = process.env.PORT || 8080;
const port = 8080;
app.listen(port, () => { console.log(`Running on port: ${port}`) });
