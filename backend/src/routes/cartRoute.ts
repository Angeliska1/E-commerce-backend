import { Router } from "express";
import CartController from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/authMiddleware.js";
import Cart from "../models/cartModel.js";

const cartRouter = Router();

cartRouter.post("/", protect, CartController.addProductToCart);
cartRouter.get("/", protect, CartController.getCart);
cartRouter.post("/increaseQuantity",
  protect,
  CartController.increaseProductQuantity
);
cartRouter.post(
  "/decreasedQuantity",
  protect,
  CartController.decreaseProductQuantity
);
cartRouter.delete(
  "/removeProduct/:productId",
  protect,
  CartController.removeFromCart
);
cartRouter.delete("/clear", protect, CartController.
  clearCart);
  cartRouter.get("/getCartSummary", protect, CartController.
    getCartSummary);

export default cartRouter;