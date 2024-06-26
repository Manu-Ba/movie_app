import express from "express";
import cors from "cors";
import { router } from "./router.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
