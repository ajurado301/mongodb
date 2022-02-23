// Importar Schema y model
const mongoose = require('mongoose');

// Crear esquema para Coche
const CocheSchema = new mongoose.Schema({
    marca: {
        type: String,
        trim: true,
        required: true
    },
    modelo: {
        type: String,
        trim: true,
        required: true
    },
    matricula: {
        type: String,
        trim: true,
        required: true
    }
})

module.exports = mongoose.model('Coche', CocheSchema)
