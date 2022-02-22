// Importar conexión base datos
require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Photo = require('./models/Photo');

// Reto 3

// // Subida de fotos:
// // Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
// Photo.create({
//     user_name: 'Felipe',
//     url_foto: './foto1felipe',
//     titulo: 'Foto 1 Felipe',
//     descripcion: 'url de ejemplo'
// })
// .then((resp) => {
//     console.log('Documento insertado correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// // Obtener fotos:
// // Dado un usuario obtener todas sus fotos
// Photo.find({ user_name: 'Ander' }, { url_foto: 1 })
// .then((resp) => {
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Seguir:
// // Dado un usuario origen y otro destino hacer que origen siga a destino.
// const usuario_origen  = 'Ander';
// const usuario_destino = 'Edgar';

// User.findOneAndUpdate({ name: usuario_origen }, { follow: usuario_destino })
// .then((resp) => {
//     if (!resp) {
//         console.log(`Usuario origen (${usuario_origen}) no encontrado`)
//     } else {
//         console.log('Operación correcta:');
//         console.log(`El usuario ${resp.name} ahora sigue al usuario ${usuario_destino}`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Dejar de seguir:
// // Dado un usuario origen y uno destino hacer que el usuario origen deje de seguir al usuario destino.
// // Si el usuario destino no coincide con el seguido por el usuario origen no hacer nada.
// const usuario_origen  = 'Ander';
// const usuario_destino = 'Edgar';

// User.findOneAndUpdate({ $and: [{ name: usuario_origen }, { follow: usuario_destino }] }, { follow: '' })
// .then((resp) => {
//     if (!resp) {
//         console.log('No se ha encontrado ningún registro con los datos especificados')
//     } else {
//         console.log('Operación correcta:');
//         console.log(`El usuario ${resp.name} ya no sigue al usuario ${resp.follow}`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Eliminar Foto:
// // Dado un usuario y un titulo de foto eliminar su foto.
// const usuario = 'Ander';
// const titulo  = 'Foto perfil Ander';

// Photo.findOneAndDelete({ $and: [{ user_name: usuario }, { titulo: titulo }] })
// .then((resp) => {
//     if (!resp) {
//         console.log('No se ha encontrado ningún registro con los datos especificados')
//     } else {
//         console.log('Operación correcta:');
//         console.log(`Foto con título ${resp.titulo} del usuario ${resp.user_name} eliminada`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Eliminar todas las Fotos:
// // Dado un usuario eliminar todas sus fotos.
// const usuario = 'Jose';

// Photo.deleteMany({ user_name: usuario })
// .then((resp) => {
//     if (resp.deletedCount == 0) {
//         console.log(`No se han encontrado fotos para el usuario ${usuario}`)
//     } else {
//         console.log('Operación correcta:');
//         console.log(`${resp.deletedCount} fotos del usuario ${usuario} eliminadas`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })