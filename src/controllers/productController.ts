import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

// Traemos la tabla o entidad producto de la base de datos
const productRepository = AppDataSource.getRepository(Product);

// Obtener todos los productos
export const getAllProducts = async(req: Request, res: Response) => {
  try {
    const products = await productRepository.find();
    res.json(products);
  } catch(error) {
    res.status(500).json({
      message: "Error al obtener los productos."
    });
  }
};

// Obtener un producto
export const getProductByID = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id)
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Producto no encontrado."
      });
    }
  } catch(error) {
    res.status(500).json({
      message: "Error al obtener el producto."
    });
  }
};

// Crear un producto
export const createProduct = async(req: Request, res: Response) => {
  try {

  } catch(error) {
    
  }
};

// Actualizar un producto existente
export const updateProduct = async(req: Request, res: Response) => {
  try {

  } catch(error) {
    
  }
};

// Eliminar un producto existente
export const deleteProduct = async(req: Request, res: Response) => {
  try {

  } catch(error) {
    
  }
};