const Book = require("../models/Book");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a book by name, department, or description
exports.getBookByQuery = async (req, res) => {
  try {
    const { name, department, description } = req.query;
    const query = {};
    if (name) query.name = name;
    if (department) query.department = department;
    if (description) query.description = description;
    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const {
    name,
    description,
    image,
    resourcesLink,
    semester,
    department,
    pobidan,
  } = req.body;
  try {
    const newBook = new Book({
      name,
      description,
      image,
      resourcesLink,
      semester,
      department,
      pobidan,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book by ID
exports.updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
