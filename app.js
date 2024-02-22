const express = require("express");
const app = express();
const product = require("./router/productRoute");
const errorMiddleware = require("./Middleware/Error");
const user = require("./router/userRoutes");
const cookieParser = require("cookie-parser");
const orderRoutes = require('./router/orderRoute')
const payment = require('./router/paymentRoute')
var cors = require('cors');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require('path')


app.use(bodyParser.urlencoded({extended :true} ))
app.use(fileUpload({useTempFiles:true}))

app.use(cors()) 
app.use(express.json());
app.use(cookieParser())
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", payment);


// middleware for error
app.use(errorMiddleware);

module.exports = app;
