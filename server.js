import app from "./src/app.js";

// Ambiente de produção ou local
const port = process.env.PORT || 3000;

// Executando o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});