require('dotenv').config();

PORT = process.env.PORT ;
DB_URL = process.env.DB_URL
// # DB_URL = mongodb+srv://Devang:325869531045@cluster0.pypifiu.mongodb.net/Ecommerce
// # db_url = mongodb+srv://devangpatel6445:U3J3tiDpkoM5mYL4@cluster0.u79dhrn.mongodb.net/
JWT_SECRETKEY = process.env.JWT_SECRETKEY
JWT_EXPIRE = process.env.JWT_EXPIRE
COOKIE_EXPIRE_TIME = process.env.COOKIE_EXPIRE_TIME
SMPT_HOST =
SMPT_PORT = 
SMPT_SERVICE = process.env.SMPT_SERVICE
SMPT_MAIL = process.env.SMPT_MAIL
SMPT_PASSWORD = process.env.SMPT_PASSWORD
CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
ClOUDINARY_NAME = process.env.ClOUDINARY_NAME
FRONTEND_URL= process.env.FRONTEND_URL

STRIPE_API_KEY = process.env.STRIPE_API_KEY
STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

module.exports = {PORT, DB_URL,JWT_SECRETKEY,JWT_EXPIRE, COOKIE_EXPIRE_TIME, SMPT_HOST,SMPT_PORT,SMPT_SERVICE,SMPT_MAIL,SMPT_PASSWORD,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,ClOUDINARY_NAME,FRONTEND_URL,STRIPE_API_KEY,STRIPE_SECRET_KEY}