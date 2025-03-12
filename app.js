const expres = require("express");
const app = expres();
app.use(expres.json());

const userRoutes = require("./src/Routes/routes");
app.use(userRoutes);

const Port = 3000;
app.listen(Port,()=>{
    console.log("server is running ")
});