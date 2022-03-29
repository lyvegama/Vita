import React, { useState } from "react";
import axios from "axios"


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loguear = () => {



        let usuarioLogin = {
            email,
            password
        }

    // axios.post("/login", usuarioLogin).then((res) => {
    //     if (res.data === "userNoExiste") {
    //         console.log("contraseña incorrecta")
    //     } else if (res.data === "passwordMal") {
    //         console.log("contraseña correcta")
    //     } else {
    //         if (!res.data.baneado) {
    //             sessionStorage.setItem("infoUser", JSON.stringify(res.data));
    //             window.location.href = "http://localhost:3000/home"
    //         } else {
    //             window.location.href = "http://localhost:3000/home"
    //         }
    //     }

    // })

    axios.post('/login', usuarioLogin).then((res) => {
        console.log("hola " + usuarioLogin.email);
      }).catch(function(error) {
        console.log(error);
      })
}

    return (
        <div>
            <h1>Inicia sesión</h1>
            <div className="form-control">
                <label >Email</label>
                <br></br>
                <input type="text" name="email" placeholder="Ej: ejemplo@email.com" onChange={(e) => { setEmail(e.target.value)}}></input>
                <br></br>
                <label>Contraseña</label>
                <br></br>
                <input type="password" name="password" placeholder="Contraseña" onChange={(e) => { setPassword(e.target.value)}}></input>


                <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={() => {loguear() }} >Enviar</button>

            </div>
        </div>
    );

}
export default Login;