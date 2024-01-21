import express  from "express";
import { createTodo, getAllTodo, deleteTodo, updateTodo } from "../Controller/todo.js"

export const router = express.Router();

router.post('/create', createTodo);
router.get('/getAllTodo', getAllTodo);
router.delete('/delete/:id', deleteTodo);
router.put('/update/:id', updateTodo);