// Mongoose
const mongoose = require('mongoose')

// Modelo Pelicula
const Pelicula = require('../models/pelicula')

// Controladores para las peticiones a los endpoints de peliculas/actor
// GET
const getActor = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Pelicula.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Actores cargados', respuesta: resp.actors })
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido' })
    }
};
                
// POST                
const postActor = (req, res) => {
    const { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula.findById(id, { _id: 1, actors: 1 })
        .then((resp) => {
            if (resp) {
                let actors = resp.actors;
                actors.push(name);
                Pelicula.findByIdAndUpdate(id, {actors: actors})
                .then((resp) => {
                    return res.status(200).json({ ok: true, message: 'Actor agregado correctamente' })
                })
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre actor' })
    }
};

// DELETE
const deleteActor = (req, res) => {
    let { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula.findById(id, { _id: 1, actors: 1 })
        .then((resp) => {
            if (resp) {
                let actors = resp.actors;
                if (actors.includes(name)) {
                    actors.splice(actors.indexOf(name), 1);
                    Pelicula.findByIdAndUpdate(id, {actors: actors})
                    .then((resp) => {
                        return res.status(200).json({ ok: true, message: 'Actor eliminado correctamente' })
                    })
                } else {
                    return res.status(200).json({ ok: false, message: 'Actor no encontrado' })
                };
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre actor' })
    }
};

// Exportar controladores
module.exports = {
    getActor,
    postActor,
    deleteActor
}