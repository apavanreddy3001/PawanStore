const expres = require("express");
const routes = expres.Router();
const Users = require("../Controller/UserController");
const Product = require("../Controller/ProductsController");
//console.log(Users);


routes.route("/login").post(Users.getLogDetails);
/**
 * Routes User 
 * Start 
 */
routes.route("/user/getUserList").get(Users.getAllUsers);
/**
 * Routes End 
 */


/**
 *  Products Routes 
 * Products Routes  Start 
 */
 
routes.route("/product/addProduct").post(Product.addProducts);
routes.route("/product/getProduct").get();
routes.route("/product/getProducts").get();
routes.route("/product/getProducts").delete();
routes.route("/product/getProducts").put();

 
/**
 * Products Routes End
 */








routes.get("/users/getUser",(req,resp,next)=>{
    resp.send("get User Api ");
});

routes.get("/user/getUser/:id",(req,resp,next)=>{
           resp.send("the user details By Id ");
});
routes.route("/user/addUser").post(Users.addUser);
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