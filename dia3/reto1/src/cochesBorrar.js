// Importar conexión base datos
require('./bbdd')

// Importar modelos
const Coche = require('./models/Coche');


// Borrar coleccion coches
Coche.deleteMany({})
.then((resp) => {
    console.log(resp)
})
.catch((err) => {
    console.log(err)
})