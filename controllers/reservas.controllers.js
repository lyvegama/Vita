const mongoose = require("mongoose")
const Reservas = require("../model/reservas.schema");

const reserva = {

    addReserva: (req, res) => { addReserva(req, res) },

    pintarReserva: (req, res) => { pintarReserva(req, res) },

}



async function addReserva(req, res) {
    const { actividad, fecha, hora, id_usuario } = req.body;
    console.log(req.body)
    const reservaToSave = new Reservas({
        actividad,
        fecha,
        hora_inicio: hora,
        id_usuario
    })
    await reservaToSave.save();
    res.send({ message: "Reserva añadida" })}


function pintarReserva(req, res) {
   const { id_usuario } = req.body;
   var reservas = Reservas.find({ id_usuario: id_usuario }, function (err, res) {
        if (err) throw err;
        console.log(res);
        return reservas
    })


}

module.exports = reserva