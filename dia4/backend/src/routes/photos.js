// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPhoto, postPhoto, deletePhoto } = require('../controllers/photos')

// Crear los endpoints para la ruta /photos y atenderlos mediante sus controladores
router.get('/', getPhoto);
router.post('/', postPhoto);
router.delete('/', deletePhoto);

// Exportar router
module.exports = router;