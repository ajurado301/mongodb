// Importar Schema y model
const mongoose = require('mongoose');

// Crear esquema para User
// Validaciones:
//  login: requerido, no permite duplicado, los espacios en blanco seran recortados
//  password: requerido (la robustez de la contraseña la comprobamos con un middleware 'pre' en lugar de con match + expresión regular)
const photoSchema = new mongoose.Schema({
    url_foto: {
        type: String,
        trim: true,
        required: true
    },
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Photo', photoSchema)
