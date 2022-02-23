// Importar conexión base datos
require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Photo = require('./models/Photo');

// // Insertar varios documentos en la colección Users
// let arrayUsuarios = [
//     {
//         name: 'Ander', surname: 'Jurado', dateOfBirth: "1989-11-30", comments: 'No comment', rol: 'User',
//         login: 'ajurado', password: 'P@ssw0rd', address: 'Calle de la esquina, 1', phone: 555666771,
//         email: 'ajurado@gmail.com', follows: []
//     },
//     {
//         name: 'Juan Jose', surname: 'Cabrera', dateOfBirth: "1990-05-15", comments: 'No comment', rol: 'User',
//         login: 'jjcabrera', password: 'P@ssw0rd', address: 'Calle de la esquina, 2', phone: 555666772,
//         email: 'jjcabrera@gmail.com', follows: []
//     },
//     {
//         name: 'Edgar', surname: 'Rodríguez', dateOfBirth: "1991-01-22", comments: 'No comment', rol: 'User',
//         login: 'erodriguez', password: 'P@ssw0rd', address: 'Calle de la esquina, 3', phone: 555666773,
//         email: 'erodriguez@gmail.com', follows: []
//     },
//     {
//         name: 'Jose', surname: 'Silva', dateOfBirth: "1992-02-02", comments: 'No comment', rol: 'User',
//         login: 'jsilva', password: 'P@ssw0rd', address: 'Calle de la esquina, 4', phone: 555666774,
//         email: 'jsilva@gmail.com', follows: []
//     },
//     {
//         name: 'Pascual', surname: 'Vera', dateOfBirth: "1993-03-18", comments: 'No comment', rol: 'User',
//         login: 'pvera', password: 'P@ssw0rd', address: 'Calle de la esquina, 5', phone: 555666775,
//         email: 'pvera@gmail.com', follows: []
//     },
//     {
//         name: 'Pedro', surname: 'Abenza', dateOfBirth: "1994-06-12", comments: 'No comment', rol: 'User',
//         login: 'pabenza', password: 'P@ssw0rd', address: 'Calle de la esquina, 6', phone: 555666776,
//         email: 'pabenza@gmail.com', follows: []
//     },
//     {
//         name: 'Jose Antonio', surname: 'García', dateOfBirth: "1995-09-08", comments: 'No comment', rol: 'User',
//         login: 'jagarcia', password: 'P@ssw0rd', address: 'Calle de la esquina, 7', phone: 555666777,
//         email: 'jagarcia@gmail.com', follows: []
//     }
// ];

// User.insertMany(arrayUsuarios)
// .then((resp) => {
//     console.log('Documentos insertados correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// // Insertar varios documentos en la colección Photos con el mismo id de usuario cada 3 fotos
// let arrayFotos = [
//     { url_foto: './fotoperfilander.png', titulo: 'Foto perfil Ander', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1nder.png', titulo: 'Foto 1 Ander', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2ander.png', titulo: 'Foto 2 Ander', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfiljuanjose.png', titulo: 'Foto perfil Juan Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1juanjose.png', titulo: 'Foto 1 Juan Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2juanjose.png', titulo: 'Foto 2 Juan Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfiledgar.png', titulo: 'Foto perfil Edgar', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1edgar.png', titulo: 'Foto 1 Edgar', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2edgar.png', titulo: 'Foto 2 Edgar', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfiljose.png', titulo: 'Foto perfil Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1jose.png', titulo: 'Foto 1 Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2jose.png', titulo: 'Foto 2 Jose', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfilpascual.png', titulo: 'Foto perfil Pascual', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1pascual.png', titulo: 'Foto 1 Pascual', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2pascual.png', titulo: 'Foto 2 Pascual', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfilPedro.png', titulo: 'Foto perfil Pedro', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1Pedro.png', titulo: 'Foto 1 Pedro', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto2Pedro.png', titulo: 'Foto 2 Pedro', descripcion: 'Esta es la descripción' },
//     { url_foto: './fotoperfiljoseantonio.png', titulo: 'Foto perfil Jose Antonio', descripcion: 'Esta es la descripción' },
//     { url_foto: './foto1joseantonio.png', titulo: 'Foto 1 Jose Antonio', descripcion: 'Esta es la descripción', user: {}  },
//     { url_foto: './foto2joseantonio.png', titulo: 'Foto 2 Jose Antonio', descripcion: 'Esta es la descripción' }
// ];

// User.find({})
// .then((users) => {
//     users.forEach((documento, indice) => {
//         arrayFotos[indice * 3].user = documento._id;
//         arrayFotos[indice * 3 + 1].user = documento._id;
//         arrayFotos[indice * 3 + 2].user = documento._id
//     });
//     Photo.insertMany(arrayFotos)
//     .then((resp) => {
//         console.log('Documentos insertados correctamente');
//         console.log(resp)
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// // Buscar un usuario y mediante su id obtener su fotos y mostrarlas junto a los datos del usuario relacionado a la foto
// User.findOne({ name: 'Ander' }, { _id: 1 })
// .then((userId) => {
//     if (userId) {
//         Photo.find({ user: userId })
//         .populate('user')
//         .exec((err, fotos) => {
//             if (err) {
//                 console.log(err);
//                 process.emit(-1);
//             }
//             console.log(fotos)            
//         })
//     }
// })
// .catch((err) => {
//     console.log(err);
// })

// // Actualizar el campo follows de cada usuario de la colección user con 3 ids de usuarios aleatorios (sin repetirse)
// User.find({}, { name: 1, _id: 1 })
// .then((usuarios) => {
//     usuarios.forEach((usuario) => {
//         let follows = [];
//         while (follows.length < 3) {
//             let indice = Math.round(Math.random() * (usuarios.length - 1));
//             if (!follows.includes(usuarios[indice]._id)) {
//                 follows.push(usuarios[indice]._id);
//             }
//         };
//         User.updateOne({ name: usuario.name }, { follows: follows })
//         .then((resp) => {
//             console.log(resp)
//         })
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// // Buscar un usuario por su id y mediante una función de obtener timeline mostrar las fotos de las personas a las que sigue
// User.findById('621683ff95c8108e01a44ef5', { name: 1, follows: 1 })
// .then((userFollows) => {
//     timeline(userFollows)
// })
// .catch((err) => {
//     console.log(err)    
// })

// // Función para mostrar las fotos de los usuarios a los que se sigue
// function timeline(userFollows) {
//     console.log('\nUsuario:', userFollows.name);
//     userFollows.follows.forEach((follow) => {
//         Photo.find({ user: follow })
//         .populate('user', { name: 1 })
//         .exec((err, fotos) => {
//             if (err) {
//                 console.log(err);
//                 process.emit(-1);
//             }
//             fotos.forEach((foto, indice) => {
//                 if (indice == 0) {
//                     console.log('- Fotos del usuario seguido:', foto.user.name)
//                 };
//                 console.log(`\tTítulo: ${foto.titulo} - Descripción: ${foto.descripcion} - Foto url: ${foto.url_foto}`)
//             })
//         })
//     })
// }