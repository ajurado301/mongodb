// Variables de entorno
require('dotenv').config();
// Puesta en marcha de app de express 
const app = require('./app');
// Base de datos
require('./bbdd');

// ************************************************************************
// Middlewares para la carga de las rutas de cada endpoint correspondiente
// ************************************************************************
app.use('/photos', require('./routes/photos'));
app.use('/follow', require('./routes/follow'));
app.use('/unfollow', require('./routes/unfollow'));
// ************************************************************************

// Respuesta a cualquier petición en '/'
app.all('/', (req, res) => {
    let respuesta = { ok: true, message: 'Punto de inicio /' }
    res.status(200).send(respuesta);
})

// Respuesta a cualquier endponit erroneo
app.use((req, res) => {
    respuesta = {ok: false, codigo: 404, mensaje: 'URL no encontrada'};
    res.status(404).send(respuesta);
})

