// Importar modelo Photos
const User = require('../models/User');

// Controlador para la petición al endpoint de /unfollow
// PUT
const putUnfollow = (req, res) => {
    let { usuario_origen, usuario_destino } = req.body;
    if (usuario_origen && usuario_origen.length == 24 && usuario_destino && usuario_destino.length == 24) {
        User.findById(usuario_origen, { _id: 1, follows: 1 })
        .then((resultado) => {
            if (resultado) {                
                let follows = resultado.follows;
                User.findById(usuario_destino, { _id: 1 })
                .then((resultado) => {
                    if (resultado) {
                        if (follows.indexOf(resultado._id) < 0) {
                            return res.status(200).json({ ok: false, message: 'El usuario origen no sigue al usuario destino'});
                        } else {
                            follows.splice(follows.indexOf(resultado._id), 1);
                            User.findByIdAndUpdate(usuario_origen, { follows: follows })
                            .then((respuesta) => {
                                if (respuesta) {
                                    return res.status(200).json({ ok: false, message: 'Eliminado correctamente'});
                                }
                            })
                        };
                    }else {
                        return res.status(200).json({ ok: false, message: 'El usuario destino no existe'});
                    }
                })
            } else {
                return res.status(200).json({ ok: false, message: 'El usuario origen no existe'});
            };
        })
        .catch((err) => {
            console.log(err)
        })
    } else {
        return res.status(200).json({ ok: false, message: 'Los datos recibidos no son válidos'})
    }
};
 
// Exportar controladores
module.exports = {
    putUnfollow
}