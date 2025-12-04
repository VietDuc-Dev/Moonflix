import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
// import routes from "./src/routes/index.js";
import connectDatabase from "./src/database/db.connect.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/api/v1", routes);

const port = process.env.PORT || 8080;

// Kết nối với database và khởi chạy server
app.listen(port, async () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}/`);
  await connectDatabase();
});
