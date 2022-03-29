import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

import Main from "./components/Main";

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Main />
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;
