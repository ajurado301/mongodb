// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para Profile
// Validaciones:
//  addres: requerido, los espacios en blanco seran recortados
//  phone: requerido
//  email: requerido, expresión regular para validar email con match
const credentialSchema = new Schema({
    address: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        // Expresión regular: Implementación del Estandard Official: RFC 5322: (valida en el 99.99% de los emails existentes)
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: true,
    }
})

// Exportar modelo
module.exports = model("Credential", credentialSchema)