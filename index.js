const app = require('./app.js');
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./config.js');
const connectDataBase = require('./db');
const cloudinary = require('cloudinary');
require("dotenv");
const port = process.env.PORT

connectDataBase();

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})