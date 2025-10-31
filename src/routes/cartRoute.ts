import { Router } from "express";
import CartController from "../controllers/cartController.ts";
import { protect } from "../middleware/authMiddleware.ts";
import { adminOnly } from "../middleware/authMiddleware.ts";
import Cart from "../models/cartModel.ts";

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