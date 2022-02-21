// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para Profile
const credentialSchema = new Schema({
    address: String,
    phone: Number,
    email: String
})

// Exportar modelo
module.exports = model("Credential", credentialSchema)