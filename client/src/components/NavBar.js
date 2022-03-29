import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {


    return (
        <div>
            <Navbar className= "justify-content-center" fixed="bottom">
                <Nav.Item>
                    <Nav.Link href="/servicios">Servicios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/actividades">Actividades</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/agenda">Agenda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/perfil" >Perfil</Nav.Link>
                </Nav.Item>
            </Navbar>         
        </div>
    );

}

export default NavBar;