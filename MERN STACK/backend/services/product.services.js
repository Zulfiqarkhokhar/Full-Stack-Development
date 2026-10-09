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
export const getProductByIdAndUpdateService = async (id, newData) => {
    const product = await ProductModel.findByIdAndUpdate(
        id,
        newData,
        {
            new: true,
            runValidators: true
        }
    );

    return product;
};
export const deleteProductService = async (id) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    return deletedProduct;
};

export const throwError = async()=>{
    throw new Error("Testing for global error handling with middleware");
}