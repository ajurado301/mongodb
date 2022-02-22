// Importar conexión base datos
require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Profile = require('./models/Profile');
const Credential = require('./models/Credential');

// Insertar un documento en cada colección para comprobar que funcionan las validaciones
// Model User
const userDocument = new User({
    login: "user01",
    password: "passwordsimple"
});

userDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err.message)
})

// Model Profile
const profileDocument = new Profile({
    name: "Felipe",
    surname: "Buerno",
    dateOfBirth: "2023-11-30",
    comments: "No comment",
    rol: "User"
})

profileDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err.message)
});

// Model Credentials
const credentialDocument = new Credential({
    address: "Santa Clara, 1 - 1ºC",
    phone: 609412865,
    email: "ajurado301@gmail"
})

credentialDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err.message)
})
