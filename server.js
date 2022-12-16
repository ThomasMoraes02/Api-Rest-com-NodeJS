const http = require("http");
const port = 3000;

const routes = {
    "/": "Curso de Node",
    "/livros": "Entrei na página de livros",
    "/autores": "Listagem de autores",
    "/editora": "Pagina de editora"
};

// Segue o mesmo padrão do Slim do PHP - Requisição e Resposta
// Passando o header e o tipo de resposta
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
});

// Executando o servidor na porta definida
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
