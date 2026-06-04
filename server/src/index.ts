import express from "express";
import { productRouter } from "./routes/product.routes";
import { userRouter } from "./routes/user.routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use("/api/auth", userRouter);
app.use("/api", productRouter);

app.listen(port, () => {
  console.log("port is running at server", port);
});
