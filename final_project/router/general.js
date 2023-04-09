const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});


public_users.get('/',function (req, res) {
  return res.send(JSON.stringify(books, null, 4));
});


public_users.get('/isbn/:isbn',function (req, res) {
  const { isbn } = req.params;

  if (!isbn) {
    return res.send('ISBN is not provided!')
  }

  const bookByISBN = books[isbn];

  if (!bookByISBN) {
    return res.send(`No book with ISBN ${isbn} was found`)
  }

  return res.send(JSON.stringify(bookByISBN, null, 4));

});


public_users.get('/author/:author',function (req, res) {
  const { author } = req.params;
  if (! author) {
    return res.send(' No author provided');
  }

  const booksArr = Object.values(books);
  const booksByAuthor = booksArr.filter(book => book.author === author);

  if (booksByAuthor.length === 0) {
    return res.send(`No books by author ${author} were found`);
  }

  return res.send(JSON.stringify(booksByAuthor, null, 4))
});


public_users.get('/title/:title',function (req, res) {
  const { title } = req.params;
  if (!title) {
    return res.send(' No title provided!');
  }

  const booksArr = Object.values(books);
  const booksByTitle = booksArr.filter(book => book.title.indexOf(title) !== -1);
  if (booksByTitle.length === 0) {
    return res.send(`No books with the title ${title} were found`);
  }
  return res.send(JSON.stringify(booksByTitle, null, 4));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
