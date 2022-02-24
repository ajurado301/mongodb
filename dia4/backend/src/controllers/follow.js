// Importar modelo User
const User = require('../models/User');

// Controlador para la petición al endpoint de /follow
// PUT
const putFollow = (req, res) => {
    let { usuario_origen, usuario_destino } = req.body;
    if (usuario_origen && usuario_origen.length == 24 && usuario_destino && usuario_destino.length == 24) {
        User.findById(usuario_origen, { _id: 1, follows: 1 })
        .then((resultado) => {
            if (resultado) {                
                let follows = resultado.follows;
                User.findById(usuario_destino, { _id: 1 })
                .then((resultado) => {
                    if (resultado) {
                        if (follows.includes(resultado._id)) {
                            return res.status(200).json({ ok: false, message: 'El usuario origen ya sigue al usuario destino'});
                        } else {
                            follows.push(resultado._id);
                            User.findByIdAndUpdate(usuario_origen, { follows: follows })
                            .then((respuesta) => {
                                console.log(respuesta);
                                if (respuesta) {
                                    return res.status(200).json({ ok: false, message: 'Agregado correctamente'});
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
    putFollow
}