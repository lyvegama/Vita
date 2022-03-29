import React, { Component } from "react";

import { Button, Row, Container, Col  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Buscador from "../components/Buscador";
import Encuestas from "../components/Encuesta";
import ProxActividades from "../components/ProxActividades";



class Home extends Component {
   
    render() {
        return (
            <Container fluid>
                <div>HOME</div>
                <Buscador/>
                <Encuestas/>
                <ProxActividades/>
            </Container>
            
        );
    }
}
export default Home;
