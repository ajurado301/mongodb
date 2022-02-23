// Importar mongoose
const mongoose = require('mongoose');

// Crear esquema para Persona
const PersonaSchema = new mongoose.Schema({
    nombre: { type: String, trim: true, required: true },
    email: {
        type: String,
        // Expresión regular: Implementación del Estandard Official: RFC 5322: (valida en el 99.99% de los emails existentes)
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: true,
    },
    coche: { type: mongoose.Schema.Types.ObjectId, ref: 'Coche' }
})

// Exportar modelo
module.exports = mongoose.model("Persona", PersonaSchema)