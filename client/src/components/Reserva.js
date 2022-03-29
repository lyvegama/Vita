
import React, { useState } from "react";
import axios from "axios";
const infoCitas = require("../citas.json")
const infoActividad = require("../actividades.json")
function Reserva() {

    let citasPetanca = infoCitas.filter(e => e.actividad == "petanca");
    let citasBaile = infoCitas.filter(e => e.actividad == "baile");
    let citasExcursion = infoCitas.filter(e => e.actividad == "excursion");

    let horasPetanca = infoActividad.filter(e => e.nombre == "petanca");
    let horasBaile = infoActividad.filter(e => e.nombre == "baile");
    let horasExcursion = infoActividad.filter(e => e.nombre == "excursion");
 
    let horasP = horasPetanca[0].hora_inicio
    let horasB = horasBaile[0].hora_inicio
    let horasE = horasExcursion[0].hora_inicio

    const [actividad, setActividad] = useState("petanca");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    const [viewActividad, setViewActividad] = useState(true);
    const [viewFecha, setViewFecha] = useState(false);
    const [viewHora, setViewHora] = useState(false);
    const [viewConfirm, setViewConfirm] = useState(false);

    function addReserva() {
    alert("Add reserva activado");
        let reserva = {
            actividad,
            fecha,
            hora,
            id_usuario: 152
        }
        axios.post('/addreserva', reserva).then(function(response) {
            console.log(response);
          }).catch(function(error) {
            console.log(error.response.data);
          })}
        

 
    return (

        <div>
            {viewActividad ? (
                <form>
                    <label>
                        Elige la actividad para reservar:
                        <select onChange={(e) => {
                            setActividad(e.target.value)
                        }}>

                            <option value="petanca">Petanca</option>
                            <option value="baile">Baile</option>
                            <option value="excursion">Excursión</option>
                        </select>
                    </label>
                    <input type="button" value="Siguiente" onClick={() => {
                        setViewFecha(true);
                        setViewActividad(false)
                    }} />
                </form>
            ) : ""}

            {viewFecha && actividad === "baile" ? (
                <div>
                <form>
                    <label>
                        Elige la fecha para reservar:
                        <select onChange={(e) => {
                            setFecha(e.target.value)
                        }}>
                            {citasBaile.map(fecha => <option key={fecha.dia} value={fecha.dia + " " + fecha.numero}>{`${fecha.dia + " " +  fecha.numero}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Siguiente" onClick={() => {
                        setViewHora(true);
                        setViewFecha(false)
                    }} />
                    <input type="button" value="Volver" onClick={() => {
                        setViewFecha(false);
                        setViewActividad(true)
                    }} />
                </form>
                </div>
            ) : ""}
            {viewFecha && actividad === "excursion" ? (
                <form>
                    <label>
                        Elige la fecha para reservar:
                        <select onChange={(e) => {
                            setFecha(e.target.value)
                        }}>
                            {citasExcursion.map(fecha => <option key={fecha.dia} value={fecha.dia + " " + fecha.numero}>{`${fecha.dia + " " +  fecha.numero}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Siguiente" onClick={() => {
                       setViewHora(true);
                       setViewFecha(false)
                    }} />
                    <input type="button" value="Volver" onClick={() => {
                        setViewFecha(false);
                        setViewActividad(true)
                    }} />
                </form>
            ) : ""}
            {viewFecha && actividad === "petanca" ? (
                <form>
                    <label>
                        Elige la fecha para reservar:
                        <select onChange={(e) => {
                            setFecha(e.target.value)
                        }}>
                            {citasPetanca.map(fecha => <option key={fecha.dia} value={fecha.dia + " " + fecha.numero}>{`${fecha.dia + " " +  fecha.numero}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Siguiente" onClick={() => {
                        setViewHora(true);
                        console.log(viewHora)
                        setViewFecha(false)
                    }} />
                    <input type="button" value="Volver" onClick={() => {
                        setViewFecha(false);
                        setViewActividad(true)
                    }} />
                </form>
            ) : ""}
            {viewHora && actividad === "petanca" ? (
                <form>
                    <label>
                        Elige la hora:
                        <select onChange={(e) => {
                            setHora(e.target.value)
                        }}>
                            {horasP.map(hora => <option key={hora} value={hora}>{`${hora}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Volver" onClick={() => {
                        setViewFecha(true);
                        setViewHora(false)
                    }} />
                    <input type="button" value="Reservar" onClick={() => {
                        setViewConfirm(true);
                        setViewHora(false)
                    }} />
                </form>
            ) : ""}
             {viewHora && actividad === "baile" ?(
                <form>
                    <label>
                        Elige la hora:
                        <select onChange={(e) => {
                            setHora(e.target.value)
                        }}>
                           {horasB.map(hora => <option key={hora} value={hora}>{`${hora}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Volver" onClick={() => {
                         setViewFecha(true);
                         setViewHora(false)
                    }} />
                    <input type="button" value="Reservar" onClick={() => {
                        setViewConfirm(true);
                        setViewHora(false);

                    }} />
                </form>
            ) : ""}
            {viewHora && actividad === "excursion" ? (
                <form>
                    <label>
                        Elige la hora:
                        <select onChange={(e) => {
                            setHora(e.target.value)
                        }}>
                           {horasE.map(hora => <option key={hora} value={hora}>{`${hora}`}</option>)}
                        </select>
                    </label>
                    <input type="button" value="Siguiente" onClick={() => {
                        setViewConfirm(true);
                        setViewHora(false);
                    }} />
                    <input type="button" value="Volver" onClick={() => {
                        setViewFecha(true);
                        setViewHora(false)
                    }} />
                </form>
            ) : ""}
            {viewConfirm ? (
                <div>
                <p> Reserva para {actividad} el {fecha} a las {hora}. Pulse Reservar para confirmar. </p>
                <input type="button" value="Reservar" onClick={() => {
                    addReserva()
                }} />
                </div>
            ) : ""}
        </div>

    )
}

export default Reserva