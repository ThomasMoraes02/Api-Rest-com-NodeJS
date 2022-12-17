import mongoose from "mongoose";

const bookShema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPaginas: {type: Number}
    }
)

const books = mongoose.model("books", bookShema);

export default books;