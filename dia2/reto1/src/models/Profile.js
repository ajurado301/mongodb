// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para Profile
// Validaciones:
//  name: requerido, los espacios en blanco seran recortados
//  surname: requerido, los espacios en blanco seran recortados
//  dateOfBirth: valor más alto la fecha actual
//  comments: los espacios en blanco seran recortados
//  rol: requerido, y valores obligatorios del enum
const profileSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },    
    surname: {
        type: String,
        trim: true,
        required: true
    },
    dateOfBirth: {
        type: Date,        
        max: new Date(),
    },
    comments: {
        type: String,
        trim: true
    },
    rol: {
        type: String,
        enum: ['User', 'Admin'],
        required: true
    }
})

// Exportar modelo
module.exports = model("Profile", profileSchema)