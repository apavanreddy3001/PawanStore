const Product = require("../Models/Products");
exports.addProducts = async (req,resp,next)=>{
    try {
     const product=   await  Product.addProducts(req.body);
     resp.send("the data is inserted .....")
    } catch (error) {
        resp.send("the data is not  inserted .....")  
    }
   
}
exports.getProduct = async (req,resp,next)=>{

}
exports.getProducts = async (req,resp,next)=>{

}
exports.updateProducts = async (req,resp,next)=>{

}
exports.deleteProducts = async (req,resp,next)=>{

}