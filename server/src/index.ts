import express from "express";
import { productRouter } from "./routes/product.routes";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use("/api", productRouter);
app.listen(port, () => {
  console.log("port is running at server", port);
});
