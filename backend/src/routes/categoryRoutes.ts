import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryBySlug,
  getCategoryById,
  updateCategory,
  toggleCategoryStatus,
  deleteCategory,
  deleteCategoryImage,
} from "../controllers/categoryController";
import upload from "../middleware/multer";
import { protect } from "../middleware/authMiddleware";
// import { adminOnly } from "../middleware/authMiddleware";

const categoryRouter = Router();

categoryRouter.post("/", upload.single("categoryImage"), createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/slug/:slug", getCategoryBySlug);
categoryRouter.get("/:id", getCategoryById);

categoryRouter.patch(
  "/:id",
  protect,
  upload.single("categoryImage"),
  updateCategory
);
categoryRouter.delete("/:id", protect, deleteCategory);
categoryRouter.delete("/:id/image", protect, deleteCategoryImage);
categoryRouter.patch("/:id/toggle-status", protect, toggleCategoryStatus);

export default categoryRouter;