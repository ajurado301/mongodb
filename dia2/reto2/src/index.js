// Importar conexión base datos
require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Photo = require('./models/Photo');

// // Insertar varios documentos en la colección Photos
// Photo.insertMany([
//     { user_name: 'Ander', url_foto: './fotoperfilander.png', titulo: 'Foto perfil Ander', descripcion: 'url de ejemplo' },
//     { user_name: 'Ander', url_foto: './foto1nder.png', titulo: 'Foto 1 Ander', descripcion: 'url de ejemplo' },
//     { user_name: 'Ander', url_foto: './foto2ander.png', titulo: 'Foto 2 Ander', descripcion: 'url de ejemplo' },
//     { user_name: 'Juan Jose', url_foto: './fotoperfiljuan Jose.png', titulo: 'Foto perfil Juan Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Juan Jose', url_foto: './foto 1 juan Jose.png', titulo: 'Foto 1 Juan Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Juan Jose', url_foto: './foto 2 juan Jose.png', titulo: 'Foto 2 Juan Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Edgar', url_foto: './fotoperfiledgar.png', titulo: 'Foto perfil Edgar', descripcion: 'url de ejemplo' },
//     { user_name: 'Edgar', url_foto: './foto 1 edgar.png', titulo: 'Foto 1 Edgar', descripcion: 'url de ejemplo' },
//     { user_name: 'Edgar', url_foto: './foto 2 edgar.png', titulo: 'Foto 2 Edgar', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose', url_foto: './fotoperfiljose.png', titulo: 'Foto perfil Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose', url_foto: './foto 1 jose.png', titulo: 'Foto 1 Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose', url_foto: './foto 2 jose.png', titulo: 'Foto 2 Jose', descripcion: 'url de ejemplo' },
//     { user_name: 'Pascual', url_foto: './fotoperfilpascual.png', titulo: 'Foto perfil Pascual', descripcion: 'url de ejemplo' },
//     { user_name: 'Pascual', url_foto: './foto 1 pascual.png', titulo: 'Foto 1 Pascual', descripcion: 'url de ejemplo' },
//     { user_name: 'Pascual', url_foto: './foto 2 pascual.png', titulo: 'Foto 2 Pascual', descripcion: 'url de ejemplo' },
//     { user_name: 'Pedro', url_foto: './fotoperfilPedro.png', titulo: 'Foto perfil Pedro', descripcion: 'url de ejemplo' },
//     { user_name: 'Pedro', url_foto: './foto 1 Pedro.png', titulo: 'Foto 1 Pedro', descripcion: 'url de ejemplo' },
//     { user_name: 'Pedro', url_foto: './foto 2 Pedro.png', titulo: 'Foto 2 Pedro', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose Antonio', url_foto: './fotoperfiljoseantonio.png', titulo: 'Foto perfil Jose Antonio', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose Antonio', url_foto: './foto 1 joseantonio.png', titulo: 'Foto 1 Jose Antonio', descripcion: 'url de ejemplo' },
//     { user_name: 'Jose Antonio', url_foto: './foto 2 joseantonio.png', titulo: 'Foto 2 Jose Antonio', descripcion: 'url de ejemplo' }
// ])
// .then((resp) => {
//     console.log('Documentos insertados correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// // Insertar varios documentos en la colección Users
// User.insertMany([
//     {
//         name: 'Ander', surname: 'Jurado', dateOfBirth: "1989-11-30", comments: 'No comment', rol: 'User',
//         login: 'ajurado', password: 'P@ssw0rd', address: 'Calle de la esquina, 1', phone: 555666771, email: 'ajurado@gmail.com'
//     },
//     {
//         name: 'Juan Jose', surname: 'Cabrera', dateOfBirth: "1990-05-15", comments: 'No comment', rol: 'User',
//         login: 'jjcabrera', password: 'P@ssw0rd', address: 'Calle de la esquina, 2', phone: 555666772, email: 'jjcabrera@gmail.com'
//     },
//     {
//         name: 'Edgar', surname: 'Rodríguez', dateOfBirth: "1991-01-22", comments: 'No comment', rol: 'User',
//         login: 'erodriguez', password: 'P@ssw0rd', address: 'Calle de la esquina, 3', phone: 555666773, email: 'erodriguez@gmail.com'
//     },
//     {
//         name: 'Jose', surname: 'Silva', dateOfBirth: "1992-02-02", comments: 'No comment', rol: 'User',
//         login: 'jsilva', password: 'P@ssw0rd', address: 'Calle de la esquina, 4', phone: 555666774, email: 'jsilva@gmail.com'
//     },
//     {
//         name: 'Pascual', surname: 'Vera', dateOfBirth: "1993-03-18", comments: 'No comment', rol: 'User',
//         login: 'pvera', password: 'P@ssw0rd', address: 'Calle de la esquina, 5', phone: 555666775, email: 'pvera@gmail.com'
//     },
//     {
//         name: 'Pedro', surname: 'Abenza', dateOfBirth: "1994-06-12", comments: 'No comment', rol: 'User',
//         login: 'pabenza', password: 'P@ssw0rd', address: 'Calle de la esquina, 6', phone: 555666776, email: 'pabenza@gmail.com'
//     },
//     {
//         name: 'Jose Antonio', surname: 'García', dateOfBirth: "1995-09-08", comments: 'No comment', rol: 'User',
//         login: 'jagarcia', password: 'P@ssw0rd', address: 'Calle de la esquina, 7', phone: 555666777, email: 'jagarcia@gmail.com'
//     }
// ])
// .then((resp) => {
//     console.log('Documentos insertados correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// Borrar todos los docuemntos de la colección Photos
// Photo.deleteMany({})
// .then((resp) => {
//     console.log('Documentos borrados correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// Borrar todos los docuemntos de la colección Users
// User.deleteMany({})
// .then((resp) => {
//     console.log('Documentos borrados correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })
