import { Router } from "express";
import ProductController from "../controllers/productController";
import upload from "../middleware/multer";
import paginate from "../middleware/paginate";
import Product from "../models/product.model";
// import { adminOnly } from "../middleware/authMiddleware";

const productRouter = Router();

productRouter.post(
  "/",
  upload.array("productImages", 10),
  ProductController.createProduct
);
productRouter.get("/", paginate(Product,
  {populate: {path: 'category', select: 'name slug'},
sort: { createdAt: -1 },
}), ProductController.getAllProducts);
productRouter.get("/low-stock", ProductController.getLowStockProducts);
productRouter.get("/:id", ProductController.getProductById);
productRouter.patch("/:id", ProductController.updateInventory);
productRouter.patch("/:id", ProductController.updateProduct);
// productRouter.patch("/:id", ProductController.deactivateProduct);
productRouter.delete("/:id", ProductController.permanentlyDeleteProduct);

export default productRouter;