import React from "react"
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Typewriter from "typewriter-effect"
import TrackVisibility from "react-on-screen"
import AOS from 'aos';
import 'aos/dist/aos.css'

import PythonLogo from "../../assets/img/logo/Python-logo.png"
import JSLogo from "../../assets/img/logo/JavaScript-logo.png"
import HtmlLogo from "../../assets/img/logo/HTML-logo.png"
import CssLogo from "../../assets/img/logo/CSS-logo.png"
import ReactLogo from "../../assets/img/logo/React-logo.png"
import GitLogo from "../../assets/img/logo/Git-logo.png"
import PhotoshopLogo from "../../assets/img/logo/Photoshop-logo.png"

import EnglishLVL from "../../assets/img/English-lvl.svg";
import FrenchLVL from "../../assets/img/French-lvl.svg";
import SpanishLVL from "../../assets/img/Spanish-lvl.svg";
import JapLVL from "../../assets/img/Jap-lvl.svg";




const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const SectionTitle = (props) => {

    return props.isVisible ?
        <h1>
            <Typewriter
                options={{
                    strings: 'Skills',
                    autoStart: true,
                    delay: 70
                }}
            />
            <li className="underline"/>
        </h1>

        : '';
}

AOS.init()

const Skills = () => (
        <section className="skills" id="skills">
            <Container>
                <TrackVisibility once>
                    <SectionTitle />
                </TrackVisibility>
                <div className="hard-skills">
                    <div className="programming">
                        <h3>Programming</h3>
                            <ul className="logo">
                                <li>
                                    <img src={PythonLogo}
                                         alt="Python-logo"
                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                />
                                    <h2>Python</h2>
                                </li>
                                <li>
                                    <img src={JSLogo}
                                         alt="JavaScript-logo"

                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                />
                                    <h2>JavaScript</h2>
                                </li>
                                <li>
                                    <img src={HtmlLogo}
                                         alt="HTML-logo"
                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                />
                                    <h2>HTML5</h2>
                                </li>
                                <li>
                                    <img src={CssLogo}
                                         alt="CSS-logo"
                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                    />
                                    <h2>CSS3</h2>
                                </li>
                                <li>
                                    <img src={ReactLogo}
                                         alt="React-logo"
                                         data-aos="zoom-in"
                                         data-aos-once="true"
                                    />
                                    <h2>React</h2>
                                </li>
                            </ul>
                    </div>
                    <div className="tools-platforms">
                        <h3>Tools & Platforms</h3>
                        <ul className="logo">
                            <li>
                                <img src={GitLogo}
                                     alt="git-logo"
                                     data-aos="zoom-in"
                                     data-aos-once="true"
                            />
                                <h2>Git</h2>
                            </li>
                            <li>
                                <img src={PhotoshopLogo}
                                     alt="photoshop-logo"
                                     data-aos="zoom-in"
                                     data-aos-once="true"
                            />
                                <h2>Photoshop</h2>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="spoken-language">
                    <h3>Languages</h3>
                    <Carousel responsive={responsive}
                              infinite={true}
                              autoPlay={true}
                              autoPlaySpeed="5000"
                              keyBoardControl={true}
                              ssr={true}
                              className="skill-carousel"
                    >
                        <div className="language">
                            <img src={FrenchLVL} alt="french-level"/>
                            <h5>French</h5>
                        </div>
                        <div className="language">
                            <img src={EnglishLVL} alt="english-level"/>
                            <h5>English</h5>
                        </div>
                        <div className="language">
                            <img src={SpanishLVL} alt="spanish-level"/>
                            <h5>Spanish</h5>
                        </div>
                        <div className="language">
                            <img src={JapLVL} alt="japanese-level"/>
                            <h5>Japanese</h5>
                        </div>
                    </Carousel>
                </div>
            </Container>
        </section>
    )


export default Skills