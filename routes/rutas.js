const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const { registrarHabitacion } = require('../controllers/controlador.js')
const { buscarHabitacion } = require('../controllers/controlador.js')
//const { buscarJugadores } = require('../controllers/controlador.js')
const { editarHabitacion } = require('../controllers/controlador.js')
const { eliminarHabitacion } = require('../controllers/controlador.js')



//rutas.get('/avanzada/v1/jugadores', buscarJugadores)
rutas.get('/avanzada/v1/habitaciones/:id', buscarHabitacion)
rutas.post('/avanzada/v1/habitacioness', registrarHabitacion)
rutas.put('/avanzada/v1/habitaciones/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitaciones/:id', eliminarHabitacion)

module.exports = rutas