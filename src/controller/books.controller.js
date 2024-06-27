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

ctrl.agregarLibro = (req, res) => {
    const { title, author, year } = req.body;
    const yearNumber = parseInt(year);
    const id = booksDB.length + 1;
    const libroExistente = booksDB.find(libro => libro.title === title);
    if (libroExistente) {
        return res.status(400).json({ Error: 'Ya existe un libro con ese titulo' });
    }
    const newBook = { id, title, author, yearNumber };
    booksDB.push(newBook);
    return res.status(201).json({ mensaje: 'Libro agregado con exito!' });
}

ctrl.actualizarLibro = (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;
    const yearNumber = parseInt(year);
    const libro = booksDB.find(libro => libro.id === parseInt(id));
    if (!libro) {
        return res.status(404).json({ Error: 'Libro no encontrado' });
    }
    libro.title = title;
    libro.author = author;
    libro.year = yearNumber;
    return res.json({ mensaje: 'Libro actualizado con exito!' });
}

ctrl.eliminarLibro = (req, res) => {
    const { id } = req.params;
    const libro = booksDB.find(libro => libro.id === parseInt(id));
    if (!libro) {
        return res.status(404).json({ Error: 'Libro no encontrado' });
    }
    const index = booksDB.indexOf(libro);
    booksDB.splice(index, 1);
    return res.json({ mensaje: 'Libro eliminado con exito!' });
}

export { ctrl };