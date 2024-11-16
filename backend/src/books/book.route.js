import express from "express";
import  {createBook, deleteBook, getAllBooks, singleBook, updateBook}  from "./book.controller.js";

const router = express.Router();

router.post("/create-book" , createBook)
router.get("/" , getAllBooks)
router.get("/:id" , singleBook)
router.put("/edit/:id" , updateBook)
router.delete("/:id" , deleteBook)

export default router;