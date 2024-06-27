import { Router } from 'express';
import { ctrl } from '../controller/books.controller.js';

const router = Router();

router.get('/books/', ctrl.obtenerTodosLosLibros);
router.get('/books/:id', ctrl.obtenerUnLibro);
router.post('/books/', ctrl.agregarLibro);
router.put('/books/:id', ctrl.actualizarLibro)
router.delete('/books/:id', ctrl.eliminarLibro);

export default router;