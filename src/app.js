// Iniciando com o express
import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Conexão feita com sucesso");
});

const app = express();

// Converter os dados em objetos json
app.use(express.json());

routes(app);

app.get('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    res.json(books[index]);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});

app.put('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
});

app.delete('/books/:id', (req, res) => {
    let { id } = req.params;
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});

function findBook(id) {
    return books.findIndex(book => book.id == id);
}

export default app; 