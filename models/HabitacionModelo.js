//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const HabitacionModelo = Schema({

    nombreHabitacion: {
        type: String,
        required: true
    },

    fotografiaHabitacion: {
        type: Number,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioAdulto: {
        type: String,
        required: true
    },

    precioNino: {
        type: String,
        required: true
    }

})

module.exports = model('Habitaciones', HabitacionModelo)
