import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import SigninPage from './components/SigninPage'


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path='/' element = {<Home />} exact/>
        <Route path='/dashboard' element={<Dashboard/>} exact/>
        <Route path='/login' element = {<LoginPage/>} exact/>
        <Route path='/signup' element = {<SigninPage/>} exact/>
      </Routes>

      
      {/* <Home /> */}
    </div>
  );
}

export default App;
