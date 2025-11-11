import type { IProductImage } from "../types/product.ts";
import type { ICategoryImage } from "../types/category.ts";
declare class CloudinaryService {
    static deleteLocalFile(filePath: string): void;
    static uploadMultipleProductImages(files: Express.Multer.File[], identifier: string): Promise<IProductImage[]>;
    static uploadSingleProductImage(filePath: string, identifier: string, index: number): Promise<IProductImage>;
    static deleteImage(publicId: string): Promise<boolean>;
    static deleteMultipleImages(publicIds: string[]): Promise<void>;
    static uploadSingleCategoryImage(filePath: string, identifier: string): Promise<ICategoryImage>;
}
export default CloudinaryService;
//# sourceMappingURL=cloudinaryService.d.ts.map