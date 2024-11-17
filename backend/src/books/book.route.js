import express from "express";
import  {createBook, deleteBook, getAllBooks, singleBook, updateBook}  from "./book.controller.js";
import verifyAdminToken from "../middleware/verifyAdminToken.js";

const router = express.Router();

router.post("/create-book" , verifyAdminToken ,createBook)
router.get("/" , getAllBooks)
router.get("/:id" , singleBook)
router.put("/edit/:id" , verifyAdminToken ,updateBook)
router.delete("/:id" , verifyAdminToken ,deleteBook)

export default router;