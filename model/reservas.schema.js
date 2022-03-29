// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoReservasSchema = {
    fecha: String,
    hora_inicio: String,
    id_usuario: Number,
    actividad: String,
};

const reservasSchema = mongoose.Schema(objetoReservasSchema, {versionKey: false})

reservasSchema.plugin(AutoIncrement, {inc_field: 'id_reservas'});

const Reservas = mongoose.model("reservas", reservasSchema);

module.exports = Reservas