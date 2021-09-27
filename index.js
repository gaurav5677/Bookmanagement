const express = require("express");

const database = require("./database");



const booky = express();

/*
Route................. /  
Description..............Get all books    
Access..............PUBLIC
Parameter..........NONE
Methods..............GET
*/


booky.get("/", (req, res) => {
    //change
    return res.json({ books: database.books });

});

/*
Route................. /  
Description..............Get specific based on  ISBN   
Access..............PUBLIC
Parameter..........isbn
Methods..............GET
 */



booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn);

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for the ISBN of ${req.params.isbn}`, });
    }

    return res.json({ book: getSpecificBook });

});

/*
Route................. /categopry  
Description..............Get all books    
Access..............PUBLIC
Parameter..........NONE
Methods..............GET
 */

booky.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter((book) =>
        book.category.includes(req.params.category)
    );

    if (getSpecificBook.length === 0) {
        return res.json({ error: `No book found for category of   ${req.params.category}`, });
    }

    return res.json({ book: getSpecificBook });

});


/*
Route................. / author
Description..............Get all books    
Access..............PUBLIC
Parameter..........NONE
Methods..............GET
*/

booky.get("/author", (req, res) => {
    return res.json({ authors: database.author });
});

/*
Route................. / author/book
Description..............Get all books    
Access..............PUBLIC
Parameter..........isbn
Methods..............GET
*/
booky.get("/author/book/:isbn", (req, res) => {
    const getSpecificAuthor = database.author.filter((author) =>
        author.books.includes(req.params.isbn)
    );

    if (getSpecificAuthor.length === 0) {
        return res.json({ error: `No Author found for book of   ${req.params.isbn}`, });
    }

    return res.json({ book: getSpecificAuthor });

});

/*
Route................. / publications
Description..............Get all books    
Access..............PUBLIC
Parameter.........NONE
Methods..............GET
*/

booky.get("/publication", (req, res) => {
    return res.json({ publiocation: database.publication });
});

booky.listen(3000, () => console.log("Hey server is rinnung !!!"));