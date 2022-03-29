// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoActividadesSchema = {
    nombre: String,
    dia: Array,
    duracion: String,
    hora: Array,
    id_actividad: Number
};

const actividadesSchema = mongoose.Schema(objetoActividadesSchema, {versionKey: false})

actividadesSchema.plugin(AutoIncrement, {inc_field: 'id_actividades'});

const Actividades = mongoose.model("actividades", actividadesSchema);