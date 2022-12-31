import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = ({activeLink, setActiveLink}) => {
    console.log(activeLink)
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="sm" className={scrolled ? "scrolled" : ""} sticky="top" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'navbar-link nav-link isactive' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'navbar-link nav-link isactive' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#qualification" className={activeLink === 'qualification' ? 'navbar-link nav-link isactive' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('qualification')}>Qualifications</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'navbar-link nav-link isactive' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'navbar-link nav-link isactive' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('contact')}>Contact me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default NavBar