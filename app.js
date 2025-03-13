const expres = require("express");
const app = expres();
app.use(expres.json());
const dotenv = require('dotenv')
const connetionDB = require('./src/Config/database');
var cors = require('cors')

// dot env config
dotenv.config()
const PORT = process.env.PORT || 3000;
//console.log(PORT)
const API_KEY = process.env.API_KEY
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const userRoutes = require("./src/Routes/routes");

app.use(userRoutes);
app.use(cors()) 


//const Port = 3000;
connetionDB().then(()=>{
    console.log("The Database connetion is succussfully created ");   
    app.listen(PORT,()=>{
        console.log("the server running the port "+PORT);
    })
 }).catch((err)=>{
    console.log("while connectiong to the database we got the error");
 });