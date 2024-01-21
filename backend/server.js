import express from "express";
import dotenv from "dotenv"
import connectWithDb from "./DB/db.js";
import { router as todoRouter }  from "./Routes/todo.js"

dotenv.config();
const app = express();

app.use(express.json());

connectWithDb()

app.use("/myRevision/v1", todoRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port no. ${process.env.PORT}`)
});