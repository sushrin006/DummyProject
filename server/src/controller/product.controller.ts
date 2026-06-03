import { Request, Response } from "express";
import { products } from "../constants/projects";

export const getAllProducts = (req: Request, res: Response) => {
  res.json({ products });
};

export const getProductById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = products.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(user);
};

export const getProductByName = (req: Request, res: Response) => {
  const name = req.params.name;
  const user = products.find((user) => user.name === name);
  if (!user) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(user);
};

export const getProductByDescription = (req: Request, res: Response) => {
  const description = req.params.description;
  const user = products.filter((user) => user.description === description);
  if (!user) {
    return res.status(404).json("User not found");
  }
  res.json(user);
};

export const addProduct = (req: Request, res: Response) => {
  const { name, description, refNo } = req.body;

  if (!name || !description || !refNo) {
    return res.status(400).json("Bad request");
  }

  const dataTobeAdded = {
    id: products.length + 1,
    name,
    description,
    refNo,
  };

  products.push(dataTobeAdded);
  res.json({ message: "Data added Successfully" });
};

export const updateProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, description, refNo } = req.body;
  if (!name || !description || !refNo) {
    return res.status(400).json("Bad request");
  }

  const product = products.find((product) => product.id === id);
  if (!product) {
    return res.status(404).json("Product not found");
  }
  product.name = name;
  product.description = description;
  product.refNo = refNo;
  res.json({ message: "Product updated successfully.", data: product });
};

export const deleteProducts = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.json({ message: "Product deleted successfully" });
};
