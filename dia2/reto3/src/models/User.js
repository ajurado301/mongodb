// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para User
const userSchema = new Schema({
    name        : { type: String, trim: true, required: true },    
    surname     : { type: String, trim: true, required: true },
    dateOfBirth : { type: Date, max: new Date() },
    comments    : { type: String, trim: true },
    rol         : { type: String, enum: ['User', 'Admin'], required: true },
    login       : { type: String, trim: true, unique: true, required: true },
    password    : {
        type: String,
        // Expresión regular: Contraseña 8 o más caracteres, un dígito, una minúscula, una mayúscula y un caracter no alfanumérico.
        match: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/,
        required: true
    },
    address     : { type: String, trim: true, required: true },
    phone       : { type: Number, required: true },
    email       : {
        type: String,
        // Expresión regular: Implementación del Estandard Official: RFC 5322: (valida en el 99.99% de los emails existentes)
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: true,
    },
    follow      : { type: String, trim: true }
})

// Exportar modelo
module.exports = model("User", userSchema)