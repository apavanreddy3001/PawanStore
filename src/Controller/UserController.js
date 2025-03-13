const users = require("../Models/Users");
exports.addUser = async (req,resp,next)=>{
    try {
        const user=  await users.addUser(req.body);
        resp.send("User Is added success");
    } catch (error) {
        resp.send("User Is not added ");
    }  
}
exports.getLogDetails = async (req,resp,next)=>{

     try {
        const {emailId,password} = req.body;
        const arrResult =  await  users.getUsersLoginDeatils(emailId,password);
       resp.send(arrResult);
              
    } catch (error) {
        resp.send("Please check the user details ");  
    }
           
}
exports.getAllUsers=async (req,resp,next)=>{
    try {
        const arrResult =  await users.getUsers();
        resp.send(arrResult);
    } catch (error) {
        resp.send("Please check the user details ");
    }
}