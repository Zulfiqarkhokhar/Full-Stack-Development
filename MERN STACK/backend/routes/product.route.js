import express from "express";
import { createProduct, deleteProduct, errorhandling, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller.js";

let productRoute = express.Router();

productRoute.post("/products",createProduct);
productRoute.get("/products",getAllProducts);
productRoute.get("/product/:id",getProductById);
productRoute.put("/product/:id",updateProduct);
productRoute.delete("/product/:id",deleteProduct);
productRoute.get("/error",errorhandling);


export default productRoute;