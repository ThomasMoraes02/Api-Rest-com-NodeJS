import express from "express";
import books from "./BookRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Curso de Node" });
    });

    app.use(
        express.json(),
        books
    );
}

export default routes;