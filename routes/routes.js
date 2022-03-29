const reserva = require("../controllers/reservas.controllers")
const router = require("express").Router()
const loginFunctions = require("../controllers/users.controllers")


router.post("/addreserva", reserva.addReserva)
router.post("/agendaactividades", reserva.pintarReserva)

router.post("/login", loginFunctions.login)

router.post("/perfil,", reserva.pintarReserva)

// router.post("/login", user.loguear)
module.exports = router