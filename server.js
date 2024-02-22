const app = require('./app');
const { PORT } = require('./config');
const connectDataBase = require('./db');
const cloudinary = require('cloudinary');


connectDataBase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})