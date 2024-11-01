import { Router } from "express";
import { 
  getAllProducts, 
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct 
} from "../controllers/productController";

const router = Router();

router.get("products/", getAllProducts);
router.get("products/:id", getProductByID);
router.post("products/", createProduct);
router.put("products/:id", updateProduct);
router.delete("products/:id", deleteProduct);

export default router;