const { PORT } = require('./config');
const connectDataBase = require('./db');
const cloudinary = require('cloudinary');
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
connectDataBase();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({ useTempFiles: true }))

app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", payment);
// middleware for error
app.use(errorMiddleware);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})