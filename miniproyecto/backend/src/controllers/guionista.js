// Mongoose
const mongoose = require('mongoose')

// Modelo Pelicula
const Pelicula = require('../models/pelicula')

// Controladores para las peticiones a los endpoints de peliculas/guionista
// GET
const getGuionista = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Pelicula.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Guionistas cargados', respuesta: resp.writers })
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
const postGuionista = (req, res) => {
    const { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula.findById(id, { _id: 1, writers: 1 })
        .then((resp) => {
            if (resp) {
                let writers = resp.writers;
                if (writers.includes(name)) {
                    return res.status(200).json({ ok: false, message: 'Guionista ya existe' })
                } else {
                    writers.push(name);
                    Pelicula.findByIdAndUpdate(id, {writers: writers})
                    .then((resp) => {
                        return res.status(200).json({ ok: true, message: 'Guionista agregado correctamente' })
                    })
                };
                // writers.push(name);
                // Pelicula.findByIdAndUpdate(id, {writers: writers})
                // .then((resp) => {
                //     return res.status(200).json({ ok: true, message: 'Guionista agregado correctamente' })
                // })
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre guionista' })
    }
    // })
};

// DELETE
const deleteGuionista = (req, res) => {
    let { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula.findById(id, { _id: 1, writers: 1 })
        .then((resp) => {
            if (resp) {
                let writers = resp.writers;
                if (writers.includes(name)) {
                    writers.splice(writers.indexOf(name), 1);
                    Pelicula.findByIdAndUpdate(id, {writers: writers})
                    .then((resp) => {
                        return res.status(200).json({ ok: true, message: 'Guionista eliminado correctamente' })
                    })
                } else {
                    return res.status(200).json({ ok: false, message: 'Guionista no encontrado' })
                };
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre Guionista' })
    }
};

// Exportar controladores
module.exports = {
    getGuionista,
    postGuionista,
    deleteGuionista
}