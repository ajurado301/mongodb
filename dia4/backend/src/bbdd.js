// Importar mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then((bd) => {
    console.log('Base de datos conectada en', bd.connection.host);
})
.catch((error) => {
    console.log(error)
})
