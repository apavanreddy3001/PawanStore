/**
 * products Class 
 * 
 */
const ProductSchema  =  require("../Schema/ProductSchema");

class Product {
    constructor(){
    }
    static async addProducts(productDetails){
        return await new ProductSchema(productDetails).save();       
    }
    static async getProducts(){
        return  await Users.find();
    }
    static async getProduct(id){

    }
    static async updateProduct(users,id){

    }
    static async deleteProduct(id){

    }

}

module.exports = Product;