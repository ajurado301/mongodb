// Importar Types mongoose
const { Types } = require('mongoose');

// Importar modelo Photos y User
const Photo = require('../models/Photo');
const User = require('../models/User');

// Controlador para las peticiones a los endpoints de /photos
// GET
const getPhoto = (req, res, next) => {    
    if (req.query.id && req.query.id.length == 24) {
        let respuesta;
        id = Types.ObjectId(req.query.id);
        Photo.find({ user: id })
        .then((photos) => {
            if (photos.length > 0) {
                respuesta = { ok: true, message: `Fotos del usuario con id: ${req.query.id}`, result: photos}
            } else {
                respuesta = { ok: false, message: `El usuario con id: ${req.query.id} no tiene fotos`}                
            }
            return res.status(200).json(respuesta)
        })
        .catch((err) => {
            console.log(err)
        })
    } else{
        return res.status(200).json({ ok: false, message: 'Id de usuario no válido'})
    }
};
                
// POST                
const postPhoto = (req, res) => {
    const photoBody = req.body;
    if (photoBody.user && photoBody.user.length == 24) {
        let respuesta;
        User.findById(photoBody.user, { _id: 1 })
        .then((usuario) => {
            if (usuario) {
                Photo.findOne({titulo: photoBody.titulo},{})
                .then((photo) => {
                    if (!photo) {
                        photoBody.user = Types.ObjectId(photoBody.user);
                        Photo.create(req.body)
                        .then((resultado) => {
                            console.log(resultado);
                            respuesta = { ok: true, message: `Foto del usuario con id: ${photoBody.user} agregada`};
                            return res.status(200).json(respuesta)
                        })
                    } else {
                        respuesta = { ok: false, message: `La foto '${photoBody.titulo}' para el usuario con id ${photoBody.user} ya existe`};
                        return res.status(200).json(respuesta)
                    }
                })
            } else {
                respuesta = { ok: false, message: `El usuario con id: ${photoBody.user} no existe`}                
                return res.status(200).json(respuesta)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    } else{
        return res.status(200).json({ ok: false, message: 'Id de usuario no válido'})
    }
};

// DELETE
const deletePhoto = (req, res) => {
    const { user, titulo } = req.body;
    if (user && user.length == 24) {
        let respuesta;
        let filtro;
        if (!titulo){
            filtro = { user: Types.ObjectId(user) };
        }else {
            filtro = { $and: [{ user: Types.ObjectId(user) }, { titulo: titulo }] };
        }
        Photo.deleteMany(filtro)
        .then((result) => {
            if (result.deletedCount == 0) {
                respuesta = { ok: false, message: 'Foto/s no encontrada/s'}
            } else {
                respuesta = { ok: false, message: 'Foto/s eliminada/s'}
            }
            return res.status(200).json(respuesta)
        })
        .catch((err) => {
            console.log(err)
        })
    } else{
        return res.status(200).json({ ok: false, message: 'Id de usuario no válido'})
    }
};

// Exportar controladores
module.exports = {
    getPhoto,
    postPhoto,
    deletePhoto
}