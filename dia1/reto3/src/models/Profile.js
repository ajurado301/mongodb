// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para Profile
const profileSchema = new Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String
})

// Exportar modelo
module.exports = model("Profile", profileSchema)