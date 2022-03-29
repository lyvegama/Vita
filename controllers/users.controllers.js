const mongoose = require("mongoose")
const Usuario = require("../model/users.schema");

const loginFunctions = {

    login: (req, res) => {
        login(req, res)
    }
}


function login(req, res) {
    const { email } = req.body;
    var usuario = Usuario.find({ email: email }, function (err, res) {
         if (err) throw err;
         console.log(res);
         return usuario
     })}

     module.exports = loginFunctions