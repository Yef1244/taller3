//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PDOER OPERAR EN BD
const HabitacionModelo = require('../models/HabitacionModelo.js')


//1. Funcion para insertar datos
async function insertarHabitacion(datos) {

    let habitacionNuevo = new HabitacionModelo(datos)
    return await habitacionNuevo.save()

}

//2. Funcion para buscar 1 Jugador
async function leerHabitacion(id) {

    let habitacionBuscado = await HabitacionModelo.findById(id)
    return habitacionBuscado

}

//3. Funcion para buscar TODOS los Jugadores
/*async function leerJugadores() {

    let jugadoresBuscados = await JugadorModelo.find()
    return jugadoresBuscados

}
*/

//4. Funcion para eliminar un jugador
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

//5. Funcion para editar un jugador
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

module.exports = {

    insertarHabitacion,
    leerHabitacion,
    //leerJugadores,
    borrarHabitacion,
    modificarHabitacion

}