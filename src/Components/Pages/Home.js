import React from "react";
import Typewriter from "typewriter-effect"
import { Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link'
import {
    BrowserRouter as Router
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';


AOS.init();


/* to download Resume */ /*doesn't work */
const downloadResume = () => {
    fetch("Resume-EnzoDosAnjos.pdf", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `Resume-EnzoDosAnjos.pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
}


const Home = () => (
    <section className="home"
             id="home"
    >
        <Container>
            <div className="hero-container">
                <h3 data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-once="true"
                >
                    Hello, I am
                </h3>
                <h1>
                    < Typewriter className="TextWriting"
                                 options=
                                     {{strings: ['Enzo Dos Anjos', 'a computer science student engineer'],
                                         autoStart: true,
                                         loop: true,
                                         pauseFor: 1500}}
                    />
                </h1>
                <p data-aos="fade"
                   data-aos-delay="300"
                   data-aos-once="true"
                >
                    Passionate about Computer Science and Programming since I was young. I got interested in AI around 6 years ago and, now, being a 3rd year undergraduate at the Computer Science department at INSA Lyon, I am looking for a 2 to 3 month internship (June - September 2025) in AI or Computer Vision to develop technical and practical skills in a team driven by innovation.
                </p>
                <div className="button">
                    <a href="/src/assets/Resume-EnzoDosAnjos.pdf" download>
                        <button className="dw-btn"
                                data-aos="fade-up-right"
                                data-aos-delay="300"
                                data-aos-once="true"
                                onClick={downloadResume}
                        >
                            <span className="circle"><DownloadOutlinedIcon/></span>
                            <span className="title">Download CV</span>
                            <span className="title-hover">Click here</span>
                        </button>
                    </a>
                    <Router>
                        <HashLink to='#contact'>
                            <button className="contact-btn"
                                    data-aos="fade-up-left"
                                    data-aos-delay="300"
                                    data-aos-once="true"
                            >
                                <span className="circle"><AlternateEmailOutlinedIcon/></span>
                                <span className="title">Contact me</span>
                                <span className="title-hover">Click here</span>
                            </button>
                        </HashLink>
                    </Router>
                </div>
            </div>
            <div className="hero-illu">
                {/** Put hero illustration here **/}
            </div>
        </Container>
    </section>
)

export default Home