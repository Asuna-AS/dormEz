import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import SigninPage from './components/SigninPage';
import Bathroom from "./components/Bathroom";
import Laundry from "./components/Laundry";
import Canteen from "./components/Canteen";
import LostAndFound from "./components/LostAndFind";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path='/' element = {<Home />} exact/>
        <Route path='/dashboard' element={<Dashboard/>} exact/>
        <Route path='/login' element = {<LoginPage/>} exact/>
        <Route path='/signup' element = {<SigninPage/>} exact/>
        <Route path='/bathroom' element = {<Bathroom/>} exact/>
        <Route path='/laundry' element = {<Laundry />} exact/>
        <Route path='/canteen' element = {<Canteen />} exact/>
        <Route path='/lostandfound' element = {<LostAndFound />} exact/>
      </Routes>

      
      {/* <Home /> */}
    </div>
  );
}

export default App;
