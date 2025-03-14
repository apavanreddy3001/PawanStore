const users = require("../Models/Users");
exports.addUser = async (req,resp,next)=>{
    try {
        resp.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            resp.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
        const user=  await users.addUser(req.body);

        resp.send("User Is added success");
    } catch (error) {
        resp.send("User Is not added ");
    }  
}
exports.getLogDetails = async (req,resp,next)=>{

     try {
        resp.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        resp.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        const {emailId,password} = req.body;
        const arrResult =  await  users.getUsersLoginDeatils(emailId,password);
        if(arrResult.length>0){
            resp.cookie('_id', arrResult[0]._id);
            resp.status(200).send(arrResult);

        }else{
            resp.status(401).send("Please check the user details");
        }
       
              
    } catch (error) {
        resp.status(401).send("Please check the user details ");  
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