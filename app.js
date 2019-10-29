const express = require('express');
const app = express();
const postRoutesd = require("./routes/post");
const morgan = require('morgan');

app.use(morgan('dev'));
let i = true;
const usingMiddleware = (req, res, next) => {
    if(i){
        console.log("you've got a new power");
        i = false;
    }
    else{
        console.log("middleware/applied");
    }
    next();
};

app.use(usingMiddleware);

app.use("/", postRoutesd);

const port = 8888;
app.listen(port, () => { console.log(`Running on port: ${port}`)});
