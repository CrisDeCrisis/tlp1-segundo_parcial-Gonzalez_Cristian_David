import { booksDB } from "../dataBase/dataBase.js";

const ctrl = {};

ctrl.obtenerTodosLosLibros = (req, res) => {
    res.json(booksDB);
}

export { ctrl };