import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
