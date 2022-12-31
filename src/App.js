import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import {
    NavBar,
    Home,
    Skills,
    Qualification,
    Projects,
    Contact,
    Footer
} from './Components/exports'
import TrackVisibility from "react-on-screen";


function App() {

    const [activeLink, setActiveLink] = useState('home');

    const LinkDetect = (props) => {
        if (props.isVisible) {
            setActiveLink(props.value)
        }
    }

    return (
        <div >
            <NavBar activeLink={activeLink} setActiveLink={setActiveLink}/>

            <TrackVisibility>
                <LinkDetect value='home'/>
                <Home />
            </TrackVisibility>

            <TrackVisibility>
                <LinkDetect value='skills'/>
                <Skills />
            </TrackVisibility>

            <TrackVisibility>
                <LinkDetect value='qualification'/>
                <Qualification />
            </TrackVisibility>

            <TrackVisibility>
                <LinkDetect value='projects'/>
                <Projects />
            </TrackVisibility>

            <TrackVisibility>
                <LinkDetect value='contact'/>
                <Contact />
            </TrackVisibility>

            <Footer />
        </div>

    );
}

export default App;