const expres = require("express");
const routes = expres.Router();

routes.get("/users/getUser",(req,resp,next)=>{
    resp.send("get User Api ");
});
routes.get("/user/getUserList",(req,resp,next)=>{
    resp.send("get user Details ")
});
routes.get("/user/getUser/:id",(req,resp,next)=>{
           resp.send("the user details By Id ");
});
routes.post("/user/addUser",(req,resp,next)=>{
    resp.send("the addding teh user ")
});
routes.patch("/user/updateUser/:id",(req,resp,next)=>{
    resp.send("the user is update ");
})
routes.delete("/user/deleteUser",(req,resp,next)=>{
    resp.send("the user is deleted ......");
})
routes.use("/",(req,resp,next)=>{
    resp.send("Please check the Routes ")
})

module.exports =routes;