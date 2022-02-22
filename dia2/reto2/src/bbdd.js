// Importar mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codenotch', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then((bd) => {
    console.log('Base de datos conectada en', bd.connection.host);
})
.catch((error) => {
    console.log(error)
})
