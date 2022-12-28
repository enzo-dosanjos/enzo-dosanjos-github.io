import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import PopupCard from './Components/PopupCard'
import projects from './Components/projects'

import {
    NavBar,
    Home,
    Skills,
    Qualification,
    Projects,
    Contact
} from './Components/exports'


function App() {



    return (
        <div >
            <NavBar />
            <Home />
            <Skills />
            <Qualification />
            <Projects />
            <Contact />

        </div>

    );
}

export default App;