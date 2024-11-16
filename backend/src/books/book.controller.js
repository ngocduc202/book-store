import Book from "./book.model.js"

export const createBook = async (req, res) => {
  try {
    const newBook = await Book.create({...req.body})
    await newBook.save()
    res.status(200).json({message: "Book created successfully" , book: newBook})
  } catch (error) {
    console.log("Error in creating book" , error)
    res.status(500).json({message: "Failed to create book"})
  }
}

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({createdAt: -1})
    res.status(200).json(books)
  } catch (error) {
    console.log("Error in getting all books" , error)
    res.status(500).json({message: "Failed to get all books"})
  }
}

export const singleBook = async (req, res) => {
  try {
    const {id} = req.params
    const book = await Book.findById(id)
    if(!book) {
      return res.status(404).json({message: "Book not found"})
    }
    res.status(200).json(book)
  } catch (error) {
    console.log("Error in getting single book" , error)
    res.status(500).json({message: "Failed to get single book"})
  }
}

export const updateBook = async (req, res) => {
  try {
    const {id} = req.params
    const updatedBook = await Book.findByIdAndUpdate(id , req.body , {new: true})
    if(!updateBook){
      return res.status(404).json({message: "Book not found"})
    }
    res.status(200).json({message: "Book updated successfully" , book: updatedBook})
  } catch (error) {
    console.log("Error in updating book" , error)
    res.status(500).json({message: "Failed to update book"})
  }
}

export const deleteBook = async (req, res) => {
  try {
    const {id} = req.params
    const deletedBook = await Book.findByIdAndDelete(id)
    if(!deletedBook){
      return res.status(404).json({message: "Book not found"})
    }
    res.status(200).json({message: "Book deleted successfully"})
  } catch (error) {
    console.log("Error in deleting book" , error)
    res.status(500).json({message: "Failed to delete book"})
  }
}