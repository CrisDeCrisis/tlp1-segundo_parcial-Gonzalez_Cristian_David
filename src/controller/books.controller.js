import { booksDB } from "../dataBase/dataBase.js";

const ctrl = {};

ctrl.obtenerTodosLosLibros = (req, res) => {
    res.json(booksDB);
}

ctrl.obtenerUnLibro = (req, res) => {
    const { id } = req.params;
    const libro = booksDB.find(libro => libro.id === parseInt(id));
    if (!libro) {
        res.status(404).json({ Error: 'Libro no encontrado' });
    }
    res.json(libro);
}

export { ctrl };