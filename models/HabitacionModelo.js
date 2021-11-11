//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const HabitacionModelo = Schema({

    nombreHabitacion: {
        type: String,
        required: true
    },

    fotografiaHabitacion: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioAdulto: {
        type: Number,
        required: true
    },

    precioNino: {
        type: Number,
        required: true
    }

})

//----------------------------------------------------------------------------


const ReservaModelo = Schema({

    nombreCliente: {
        type: String,
        required: true
    },

    apellidoCliente: {
        type: String,
        required: true
    },

    telefonoCliente: {
        type: Number,
        required: true
    },

    fechaInicio: {
        type: Number,
        required: true
    },

    fechaFinal: {
        type: Number,
        required: true
    },

    numeroPersonas: {
        type: String,
        required: true
    }

})

module.exports = model('Reservas', ReservaModelo)
module.exports = model('Habitaciones', HabitacionModelo)
