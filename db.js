const mongoose = require("mongoose");
const {DB_URL} = require('./config.js')
const URI = DB_URL;

const connectDataBase = ()=>{

    mongoose.connect(URI).then((data)=>{
        console.log("Mongo Connection successfull!!")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDataBase;