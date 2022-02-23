// Importar conexión base datos
require('./bbdd')

// Importar modelos
const Persona = require('./models/Persona');


// Borrar coleccion coches
Persona.deleteMany({})
.then((resp) => {
    console.log(resp)
})
.catch((err) => {
    console.log(err)
})