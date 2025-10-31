import express, { type NextFunction, type Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/databaseConn.ts";
import { errorHandler, notFound } from "./middleware/errorMiddleware.ts";
import { protect } from "./middleware/authMiddleware.ts";
import authRouter from "./routes/auth.routes.ts";
import userRouter from "./routes/user.routes.ts";
import productRouter from "./routes/productRoute.ts";
import categoryRouter from "./routes/categoryRoutes.ts";
import cartRouter from "./routes/cartRoute.ts";
import orderRouter from "./routes/orderRoute.ts";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", protect, userRouter);
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", protect, orderRouter);

app.get("/", (_, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

app.use(notFound);
app.use(errorHandler);

// Connect to database FIRST, then start server
const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Failed to start server:", errorMessage);
    process.exit(1);
  }
};

startServer();
