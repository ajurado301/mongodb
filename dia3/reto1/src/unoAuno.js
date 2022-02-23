// Importar conexión base datos
require('./bbdd')

// Importar modelos
const Persona = require('./models/Persona');
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
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err)
// })


// // Buscar el id de un coche por matrícula y crear una persona con referencia al coche encontrado
// Coche.findOne({ matricula: '8472HYT' }, { _id: 1 })
// .then((resp) => {
//     let persona = { nombre: 'Ander', email: 'ajurado301@gmail.com', coche: resp._id };
//     Persona.create(persona)
//     .then((resp) => {
//         console.log(resp)
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// // Buscar la persona por nombre y mostrar los datos de la persona y del coche asignado
// Persona.findOne({ nombre: 'Ander' })
// .populate('coche')
// .exec()
// .then((persona) => {
//     console.log(persona)
// })
// .catch((err) => {
//     console.log(err)
// })
