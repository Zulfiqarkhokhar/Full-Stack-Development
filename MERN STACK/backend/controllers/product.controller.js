import { addProductService, deleteProductService, getAllProductsService, getProductByIdAndUpdateService, getProductByIdService, throwError } from "../services/product.services.js";

export const createProduct = async(req,res,next)=>{
    try {
        let product = req.body;
        if(!product.name || !product.price || !product.category || !product.stock){
            return res.status(400).json({message:"All field are requird"});
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
        if(!products){
            return res.status(400).json({message:"Products not found"});
        }
        return res.status(200).json(products);
    } catch (error) {
       next(error)
    }
}

export const getProductById = async(req,res,next)=>{
    try {
        let {id} = req.params;
        let product = await getProductByIdService(id);
        if(!product){
            return res.status(400).json({message:"Product not found"});
        }
        return res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async(req,res,next)=>{
    try {
        let {id} = req.params;
        let product = await getProductByIdAndUpdateService(id,req.body);
        if(!product){
            return res.status(400).json({message:"Product not found"});
        }
        return res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async(req,res,next)=>{
    try {
        let {id} = req.params;
        let deleted = await deleteProductService(id);
        if(!deleted){
            return res.status(400).json({message:"Product not found"});
        }
        return res.status(200).json(deleted);
    } catch (error) {
        next(error)
    }
}

export const errorhandling = async(req,res,next)=>{
    try {
        await throwError();
    } catch (error) {
        next(error)
    }
}