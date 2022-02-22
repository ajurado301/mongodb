// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para User
// Validaciones:
//  login: requerido, no permite duplicado, los espacios en blanco seran recortados
//  password: requerido (la robustez de la contraseña la comprobamos con un middleware 'pre' en lugar de con match + expresión regular)
const photoSchema = new Schema({
    user_name: {
        type: String,
        trim: true,
        required: true
    },
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
    }
})

module.exports = model('Photo', photoSchema)
