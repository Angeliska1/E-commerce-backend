import type { Request, Response, NextFunction } from "express";
import type { ICategory } from "../types/category.ts";
/**
 * CREATE CATEGORY (Main Category or Subcategory)
 * To create main category: don't send parentCategory
 * To create subcategory: send parentCategory with existing category ID
 */
export declare const createCategory: (req: Request<{}, {}, ICategory>, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET ALL CATEGORIES (with optional filters)
 * Can filter by: main categories only, active status, etc.
 */
export declare const getAllCategories: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET CATEGORY BY ID
 * Returns single category with all details
 */
export declare const getCategoryById: (req: Request<{
    id: string;
}>, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET CATEGORY BY SLUG
 * Used for SEO-friendly URLs
 */
export declare const getCategoryBySlug: (req: Request<{
    slug: string;
}>, res: Response, next: NextFunction) => Promise<void>;
/**
 * UPDATE CATEGORY
 * Can update name, image, active status, or move to different parent
 */
export declare const updateCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * DELETE CATEGORY
 * Will fail if category has subcategories or products
 */
export declare const deleteCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * DELETE CATEGORY IMAGE
 * Removes image from category without deleting the category
 */
export declare const deleteCategoryImage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * TOGGLE CATEGORY STATUS
 * Quick endpoint to activate/deactivate categories
 */
export declare const toggleCategoryStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=categoryController.d.ts.map