import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link'
import {
    BrowserRouter as Router
} from "react-router-dom";

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    {/* verify if the user has scrolled down*/}
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="sm" className={scrolled ? "scrolled" : ""} sticky="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#qualification">Qualifications</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                                <HashLink to='#contact'>
                            <button className="navbar-contact-btn" href="#contact">Contact me</button>
                                </HashLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>

    );

}

export default NavBar