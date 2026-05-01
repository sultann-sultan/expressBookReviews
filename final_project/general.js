const axios = require('axios');

const baseURL = "http://localhost:5000";

async function getAllBooks() {
    const response = await axios.get(baseURL + "/");
    console.log(response.data);
}

async function getBookByISBN(isbn) {
    const response = await axios.get(baseURL + "/isbn/" + isbn);
    console.log(response.data);
}

async function getBooksByAuthor(author) {
    const response = await axios.get(baseURL + "/author/" + author);
    console.log(response.data);
}

async function getBooksByTitle(title) {
    const response = await axios.get(baseURL + "/title/" + title);
    console.log(response.data);
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
