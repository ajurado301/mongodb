// Importar conexión base datos
require('./bbdd')

// Importar modelos
const Persona = require('./models/PersonaAmuchos');
const Coche = require('./models/CocheAmuchos');

// // Insertar algunos documentos en la colección coches
// let arrayCoches = [
//     { marca: 'Audi', modelo: 'Q5', matricula: '2635DFK', personas: [] },
//     { marca: 'BMW', modelo: 'X1', matricula: '8472HYT', personas: [] },
//     { marca: 'RENAULT', modelo: 'Clio', matricula: '8347CTD', personas: [] },
//     { marca: 'OPEL', modelo: 'Corsa', matricula: '8392CYG', personas: [] },
//     { marca: 'SEAT', modelo: 'Ibiza', matricula: '7230BTK', personas: [] }
// ];

// Coche.insertMany(arrayCoches)
// .then((resp) => {
//     console.log(resp);
// })
// .catch((err) => {
//     console.log(err)
// })

// // Insertar algunos documentos en la colección personas
// let arrayPersonas = [
//     { nombre: 'Ander', email: 'ajurado301@gmail.com', coches: [] },
//     { nombre: 'Jose', email: 'jose@gmail.com', coches: [] },
//     { nombre: 'Juan', email: 'juan@gmail.com', coches: [] },
//     { nombre: 'Ruben', email: 'ruben@gmail.com', coches: [] },
//     { nombre: 'Pedro', email: 'pedro@gmail.com', coches: [] }
// ];

// Persona.insertMany(arrayPersonas)
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
//         Persona.updateOne({ nombre: 'Juan' }, { coches: resp })
//         .then((resp) => {
//             if (resp.matchedCount = 1) {
//                 Persona.findOne({ nombre: 'Juan' })
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

// // Buscar por ejemplo 3 personas por sus nombres y si encuentra algo actualizar los dueños de un coche buscado por su matrícula y mostrarlos
// let nombres = [{ nombre: 'Ander' }, { nombre: 'Juan' }, { nombre: 'Pedro' }];
// Persona.find({ $or: nombres }, { _id: 1 })
// .then((resp) => {
//     if (resp.length > 0) {
//         Coche.updateOne({ matricula: '2635DFK' }, { personas: resp })
//         .then((resp) => {
//             if (resp.matchedCount = 1) {
//                 Coche.findOne({ matricula: '2635DFK' })
//                 .populate('personas')
//                 .exec()
//                 .then((coche) => {
//                     console.log(coche)
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
