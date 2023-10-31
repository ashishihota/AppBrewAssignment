const Book = require("../Models/book.model");

const fetchBook = async (id) => {
  const book = await Book.findById(id);
  return book;
};

const ViewBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const AddBook = async (req, res) => {
  if (
    req.body.title == null ||
    req.body.author == null ||
    req.body.desc == null
  ) {
    return res
      .status(400)
      .json({ msg: "Please provide Title, Desc and Author" });
  }
  const alreadyExist = await Book.findOne({"title" : req.body.title});
  if (alreadyExist != null){
    return res.status(400).json({msg : "This book already exists in our database."})
  }
  if (alreadyExist != null) {
    return res.status(400, )
  }
  const book = new Book({
    title: req.body.title,
    desc: req.body.desc,
    author: req.body.author,
  });

  try {
    await book.save();
    res.status(201).json({msg: "Book was successfully added." });
  } catch (err) {
    res.statur(400).json({ message: error.message });
  }
};

const GetABook = async (req, res) => {
  try {
    const id = req.params.id;
    if (id.length < "000000000000000000000000".length) {
      return res.status(400).json({ msg: "Please provide a valid id." });
    }
    const book = await fetchBook(id);
    res.json(book);
  } catch (err) {
    console.log("error is ", err);
    if (err.name == "CastError") {
      return res.status(200).json({ data: "There is no book with this id" });
    }
    res.status(500).json({ error: err });
  }
};

const UpdateABook = async (req, res) => {
  try {
    const id = req.params.id;
    if (id.length < "000000000000000000000000".length) {
      return res.status(400).json({ msg: "Please provide a valid id." });
    }
    const book = await fetchBook(id);
    console.log("book ", id, " ", book);
    if (book == null) {
      return res.status(400).json({ msg: "There is no book with this id." });
    }
    if (
      req.body.title == null ||
      req.body.author == null ||
      req.body.desc == null
    ) {
      return res
        .status(400)
        .json({ msg: "Please provide Title, Desc and Author" });
    }
    await Book.updateOne(
      { _id: id },
      {
        title: req.body.title,
        author: req.body.author,
        desc: req.body.aurhor,
      }
    );
    res.status(200).json({ msg: "Book with id " + id + " has been updated" });
  } catch (err) {
    console.log("error ", err);
    if (err.name == "CastError") {
      return res.status(200).json({ data: "There is no book with this id" });
    }
    res.status(500).json(err);
  }
};

const DeleteABook = async (req, res) => {
  try {
    const id = req.params.id;
    if (id.length < "000000000000000000000000".length) {
      return res.status(400).json({ msg: "Please provide a valid id." });
    }
    const book = await fetchBook(id);
    console.log("book ", id, " ", book);
    if (book == null) {
      return res.status(400).json({ msg: "There is no book with this id." });
    }
    await book.deleteOne({ _id: id });
    res.status(200).json({ msg: "Book with id " + id + " has been deleted" });
  } catch (err) {
    console.log("error ", err);
    if (err.name == "CastError") {
      return res.status(200).json({ data: "There is no book with this id" });
    }
    res.status(500).json(err);
  }
};

module.exports = {
  ViewBooks,
  AddBook,
  GetABook,
  UpdateABook,
  DeleteABook,
};
