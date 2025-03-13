/**
 *  Products  sechema 
 */
const mongoose = require("mongoose");
const productSchema =  new  mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    productType:{
        type:String,
    },
    productsDescrib:{
        type:String,
    }, 
    productImage:{
        type:String,
        default:"https://www.vecteezy.com/vector-art/47299992-user-icon-symbol-design-illustration"
    }  
});
const ProductSchema =  mongoose.model("Products",productSchema);
module.exports = ProductSchema;