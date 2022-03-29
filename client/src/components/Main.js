import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Actividades from "../pages/Actividades";
import Agenda from "../pages/Agenda";
import Perfil from "../pages/Perfil";
import ReservaActividades from "../pages/ReservaActividades";
import ReservaServicios from "../pages/ReservaServicios";
import Reserva from "./Reserva";

class Main extends Component {


  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/reservaActividades" element={<ReservaActividades />} />
          <Route path="/reservaServicios" element={<ReservaServicios />} />
          <Route path="/actividad" element={<Reserva />} />
        </Routes>
      </div>
    );
  }
}
export default Main;
