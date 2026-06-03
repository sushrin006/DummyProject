import express from "express";
import * as ProductController from "../controller/product.controller";

export const productRouter = express.Router();

productRouter.get("/products", ProductController.getAllProducts);
productRouter.get("/products-by-id/:id", ProductController.getProductById);
productRouter.get(
  "/products-by-name/:name",
  ProductController.getProductByName,
);
productRouter.get(
  "/products-by-description/:description",
  ProductController.getProductByDescription,
);

productRouter.post("/addProduct", ProductController.addProduct);
productRouter.put("/updateProduct/:id", ProductController.updateProduct);
productRouter.delete("/deleteProduct/:id", ProductController.deleteProducts);
