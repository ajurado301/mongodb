// Importar conexión base datos
require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Profile = require('./models/Profile');
const Credential = require('./models/Credential');

// Insertar un documento en cada colección para comprobar que funciona
// Model User
const userDocument = new User({
    login: "ajurado",
    password: "P@ssw0rd"
});

userDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
})

// Model Profile
const profileDocument = new Profile({
    name: "Ander",
    surname: "Jurado",
    dateOfBirth: "1967-11-30",
    comments: "No comment",
    rol: "User"
})

profileDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
});

// Model Credentials
const credentialDocument = new Credential({
    address: "Santa Clara, 1 - 1ºC",
    phone: 609412865,
    email: "ajurado301@gmail.com"
})

credentialDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
})
