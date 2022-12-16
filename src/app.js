// Iniciando com o express
import express from "express";

const app = express();

// Converter os dados em objetos json
app.use(express.json());

const books = [
    { id: 1, "title": "Lord of the Rings" },
    { id: 2, "title": "The Hobbit" }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});

export default app; 