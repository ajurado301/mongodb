// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPelicula, postPelicula, putPelicula, deletePelicula } = require('../controllers/peliculas');
const { getActor, postActor, deleteActor } = require('../controllers/actor');
const { getDirector, postDirector, deleteDirector } = require('../controllers/director');
const { getGuionista, postGuionista, deleteGuionista } = require('../controllers/guionista');
const { getProductora } = require('../controllers/productora');

// Crear los endpoints para la ruta /peliculas y atenderlos mediante sus controladores
router.get('/', getPelicula);
router.post('/', postPelicula);
router.put('/', putPelicula);
router.delete('/', deletePelicula);

// Crear los endpoints para la ruta /peliculas/actor y atenderlos mediante sus controladores
router.get('/actor', getActor);
router.post('/actor', postActor);
router.delete('/actor', deleteActor);

// Crear los endpoints para la ruta /peliculas/director y atenderlos mediante sus controladores
router.get('/director', getDirector);
router.post('/director', postDirector);
router.delete('/director', deleteDirector);

// Crear los endpoints para la ruta /peliculas/guionista y atenderlos mediante sus controladores
router.get('/guionista', getGuionista);
router.post('/guionista', postGuionista);
router.delete('/guionista', deleteGuionista);

// Crear los endpoints para la ruta /peliculas/productora y atenderlos mediante sus controladores
router.get('/productora', getProductora);

// Exportar router
module.exports = router;