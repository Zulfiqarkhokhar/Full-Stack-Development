import { addProductService, deleteProductService, getAllProductsService, getProductByIdAndUpdateService, getProductByIdService, throwError } from "../services/product.services.js";
import AppError from "../utils/AppError.js";

export const createProduct = async(req,res,next)=>{
    try {
        let product = req.body;
        if (
    typeof product.name !== "string" ||
    !product.name.trim() ||
    typeof product.category !== "string" ||
    !product.category.trim() ||
    typeof product.price !== "number" ||
    product.price <= 0 ||
    typeof product.stock !== "number" ||
    product.stock < 0
) {
    throw new AppError("Invalid product data", 400);
}
        let newProduct = await addProductService(product);
        return res.status(201).json({message:"product created"});
    } catch (error) {
        next(error)
    }
}

export const getAllProducts = async(req,res,next)=>{
    try {
        let products = await getAllProductsService()
        return res.status(200).json(products);
    } catch (error) {
        next(error)
    }
}

export const getProductById = async(req,res,next)=>{
    try {
        let {id} = req.params;
        let product = await getProductByIdService(id);
        if (!product) { 
            throw new AppError("Product not found", 404); 
        }
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async(req,res,next)=>{
    try {
        let {id} = req.params;
        let product = await getProductByIdAndUpdateService(id,req.body);
        if (!product) { 
            throw new AppError("Product not found", 404); 
        }
        return res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedProduct = await deleteProductService(id);

        if (!deletedProduct) {
            throw new AppError("Product not found", 404);
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            product: deletedProduct
        });

    } catch (error) {
        next(error);
    }
};

export const errorhandling = (req, res, next) => {
    next(new AppError("Testing global error handler", 501));
};