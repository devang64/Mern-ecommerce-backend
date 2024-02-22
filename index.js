const app = require('./app');
const { PORT, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./config');
const connectDataBase = require('./db');
const cloudinary = require('cloudinary');


connectDataBase();

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})