// Importar mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/m5miniproyecto', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then((bd) => {
    console.log(`Base de datos '${bd.connection.name}' conectada en ${bd.connection.host}`);
})
.catch((error) => {
    console.log(error)
})
