// Creación del producto
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    nombre: String,
    apellidos: String,
    edad: Number,
    email: String,
    dni: String,
    password: String,
    telefono: Number,
    patologias: Array,
    ccaa: String,
    actividad: Array,
    entorno: String,
    dependiente: Boolean,
    sociabilidad: Array,
    espacio_actividad: String,
    acompañado: Boolean,
    grupo: String,
    mascota: Boolean,
    horario: String,
    id_usuario: Number,
    admin: Boolean
};

const userSchema = mongoose.Schema(objetoUserSchema, {versionKey: false})

userSchema.plugin(AutoIncrement, {inc_field: 'id_usuario'});

const Usuario = mongoose.model("users", userSchema);

module.exports = Usuario