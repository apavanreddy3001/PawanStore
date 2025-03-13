/**
 * model Name : users Details 
 * className user 
 * modules is used : moongoose, userSchema
 */
const Users = require('../Schema/Users');
class users{ 
    constructor(){

    }
    static async addUser(userDetails){
        return await new Users(userDetails).save();       
    }
    static async getUsers(){
        return  await Users.find();
    }
    static async getUser(id){

    }
    static async getUsersLoginDeatils(emailId,pass){
       return  await Users.find({"emailId":emailId,"password":pass})
    }
    static async updateUser(users,id){

    }
    static async deleteUser(id){

    }


}
module.exports = users;