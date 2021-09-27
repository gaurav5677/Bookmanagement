const books = [{

    ISBN: "12345Book",
    title: "Getting Started with MERN",
    language: "en",
    pubDate: "2021-8-12",
    numPage: 250,
    author: [1, 2],
    publications: [1],
    category: ["tech", "programing", "education", "triller"]
},
];
const author = [{

    id: 1,
    name: "Adam",
    books: ["12345Book","123456789Secret"],
},
{ id: 2, name: "Elon Musk", books: ["12345Book"] },

];
const publication = [{
    id: 1,
    name: "writex",
    books: ["12345Books"],
},
];


module.exports = { books, author, publication };