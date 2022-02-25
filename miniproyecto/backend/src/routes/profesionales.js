// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getProfesional, postProfesional, putProfesional, deleteProfesional } = require('../controllers/profesionales')

// Crear los endpoints para la ruta /profesionales y atenderlos mediante sus controladores
router.get('/', getProfesional);
router.post('/', postProfesional);
router.put('/', putProfesional);
router.delete('/', deleteProfesional);

// Exportar router
module.exports = router;