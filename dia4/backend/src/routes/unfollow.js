// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { putUnfollow } = require('../controllers/unfollow')

// Crear el endpoint para la ruta /unfollow y atenderlo mediante su controlador
router.put('/', putUnfollow);

// Exportar router
module.exports = router;