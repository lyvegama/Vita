// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoCitasSchema = {
    dia: String,
    numero: Number,
    actividades: Array,
    id_citas: Number,
};

const citasSchema = mongoose.Schema(objetoCitasSchema, {versionKey: false})

citasSchema.plugin(AutoIncrement, {inc_field: 'id_citas'});

const Citas = mongoose.model("actividades", citasSchema);

module.exports = Citas