// Importar Schema y model
const { Schema, model } = require('mongoose');

// Crear esquema para User
// Validaciones:
//  login: requerido, no permite duplicado, los espacios en blanco seran recortados
//  password: requerido (la robustez de la contraseña la comprobamos con un middleware 'pre' en lugar de con match + expresión regular)
const userSchema = new Schema({
    login: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Ejemplo de middleware en lugar de usar match en el esquema (para contraseñas seguras)
userSchema.pre('save', function(next) {
    // Expresión regular para contraseñas robustas
    let reEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;
    if (reEx.test(this.password)) {
        next()
    }else {
        console.log('Mensaje desde middleware:')
        console.log('La contraseña debe tener al menos 8 caracteres, un dígito, una minúscula, una mayúscula y un caracter no alfanumérico.')
    }
})

// Exportar modelo
module.exports = model("User", userSchema)