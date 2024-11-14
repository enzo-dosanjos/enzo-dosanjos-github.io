import React, { useState } from "react"

import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab'

import Typewriter from "typewriter-effect"
import TrackVisibility from "react-on-screen"
import AOS from 'aos';
import 'aos/dist/aos.css'

import ProjectCard from '../ProjectCard'
import Modal from '../Modal'
import projects from '../projects'


const SectionTitle = (props) => {
    return props.isVisible ?
        <h1>
            <Typewriter
                options={{
                    strings: 'Personal Projects',
                    autoStart: true,
                    delay: 70
                }}
            />
            <li className="underline"/>
        </h1>

        : '';
}

AOS.init();

const Projects = () => {

    const [openModal, setOpenModal] = useState(false)

    const [idCard, setIdCard] = useState(1)

    return (
        <section className="projects" id="projects">
            <Container>
                <TrackVisibility once>
                    <SectionTitle/>
                </TrackVisibility>
                <Tab.Container id="projects-tabs"
                               defaultActiveKey="first"
                >
                    <Nav variant="pills"
                         className="nav-pills"
                         id="pills-tab"
                         data-aos="zoom-out-down"
                         data-aos-delay="300"
                         data-aos-once="true"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="first">
                                All Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                AI Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                                Computer Vision Projects
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content data-aos="fade-up"
                                 data-aos-delay="300"
                                 data-aos-once="true"
                    >
                        <Tab.Pane eventKey="first">
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(0)
                            }}>
                                <ProjectCard {...projects[0]}/>
                            </div>
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(1)
                            }}>
                                <ProjectCard {...projects[1]}/>
                            </div>
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(2)
                            }}>
                                <ProjectCard {...projects[2]}/>
                            </div>
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(3)
                            }}>
                                <ProjectCard {...projects[3]}/>
                            </div>
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(4)
                            }}>
                                <ProjectCard {...projects[4]}/>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(0)
                            }}>
                                <ProjectCard {...projects[0]}/>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(1)
                            }}>
                                <ProjectCard {...projects[1]}/>
                            </div>
                            <div onClick={() => {
                                setOpenModal(true), setIdCard(2)
                            }}>
                                <ProjectCard {...projects[2]}/>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="modal-fct">
                    {openModal ? (document.body.style.overflow ="hidden"): (document.body.style.overflow ="auto")} {/* disable scroll while in modal */}
                    {openModal && <Modal {...projects[idCard]} setOpenModal={setOpenModal}/>}
                </div>
            </Container>
        </section>
    )
}

export default Projects