const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();
/**
 * Config the data base 
 * pakage name mongoose, dotenv 
 */
const databaseName = process.env.DATABASENAME;

const dataUrl =process.env.DATABASENAMEURL;
console.log(dataUrl+databaseName);
//process.exit();

 const connetionDB =  async ()=>{
       await mongoose.connect(
        dataUrl
       );
 }
module.exports = connetionDB;

