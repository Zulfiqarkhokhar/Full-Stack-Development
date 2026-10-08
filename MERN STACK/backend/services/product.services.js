import ProductModel from "../models/product.model.js";

export const addProductService = async(product)=>{
    
    let {name,price,category,stock} = product;
    let newProduct = await ProductModel.create({name,price,category,stock});
    return newProduct;
}
export const getAllProductsService = async()=>{
    
    let products = await ProductModel.find();
    return products;
}
export const getProductByIdService = async(id)=>{
    
    let product = await ProductModel.findById(id);
    return product;
}
export const getProductByIdAndUpdateService = async(id,newData)=>{
    
    let product = await ProductModel.findByIdAndUpdate(id,newData,{new:true});
    return product;
}
export const deleteProductService = async(id)=>{
    
    let deleted = await ProductModel.deleteOne({_id:id});
    return deleted;
}

export const throwError = async()=>{
    throw new Error("Testing for global error handling with middleware");
}