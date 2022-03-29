import axios from "axios";
import React, { useState } from "react";


function Perfil() {


    function pedirAgendaActividades(id_usuario) {
        
        var usuario = {id_usuario: 152}

        axios.post("/agendaactividades", usuario);
        console.log(usuario)
    }


    return (
        <div>
            <h1>PERFIL</h1>

            <h2>Tus actividades reservadas</h2>
            <form>
                <input type="button" value="Ver citas" onClick={() => {pedirAgendaActividades()}}></input>
            </form>

            <h2>Tus servicios reservados</h2>
        </div>
    );

}
export default Perfil;