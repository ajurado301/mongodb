// Importar conexión base datos
require('./bbdd')

// Importar modelos
const Persona = require('./models/PersonaAmuchos');
const Coche = require('./models/Coche');

// // Insertar algunos documentos en la colección coches
// let arrayCoches = [
//     { marca: 'Audi', modelo: 'Q5', matricula: '2635DFK' },
//     { marca: 'BMW', modelo: 'X1', matricula: '8472HYT' },
//     { marca: 'RENAULT', modelo: 'Clio', matricula: '8347CTD' },
//     { marca: 'OPEL', modelo: 'Corsa', matricula: '8392CYG' },
//     { marca: 'SEAT', modelo: 'Ibiza', matricula: '7230BTK' }
// ];

// Coche.insertMany(arrayCoches)
// .then((resp) => {
//     console.log(resp);
// })
// .catch((err) => {
//     console.log(err)
// })

// // Insertar un documento en la colección personas
// let persona = { nombre: 'Ander', email: 'ajurado301@gmail.com', coches: [] };
// Persona.create(persona)
// .then((resp) => {
//     console.log(resp);
// })
// .catch((err) => {
//     console.log(err)
// })

// // Buscar por ejemplo 3 coches por sus matrículas y si encuentra algo actualizar los coches de una persona buscada por su nombre y mostrarlos
// let matriculas = [{ matricula: '2635DFK' }, { matricula: '8347CTD' }, { matricula: '7230BTK' }];
// Coche.find({ $or: matriculas }, { _id: 1 })
// .then((resp) => {
//     if (resp.length > 0) {
//         Persona.updateOne({ nombre: 'Ander' }, { coches: resp })
//         .then((resp) => {
//             if (resp.matchedCount = 1) {
//                 Persona.findOne({ nombre: 'Ander' })
//                 .populate('coches')
//                 .exec()
//                 .then((persona) => {
//                     console.log(persona)
//                 })
//             }
//         })
//     }else {
//         console.log('No se encontraron coches para las matrículas:');
//         console.log(matriculas)
//     }
// })
// .catch((err) => {
//     console.log(err)
// })