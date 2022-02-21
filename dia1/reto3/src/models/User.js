// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para User
const userSchema = new Schema({
    login: String,
    password: String
})

// Exportar modelo
module.exports = model("User", userSchema)