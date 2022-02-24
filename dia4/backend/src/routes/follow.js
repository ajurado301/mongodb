// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { putFollow } = require('../controllers/follow')

// Crear el endpoint para la ruta /follow y atenderlo mediante su controlador
router.put('/', putFollow);

// Exportar router
module.exports = router;