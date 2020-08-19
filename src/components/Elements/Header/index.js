import React, {useState, useEffect} from 'react';
import { Navbar, Brand , Toggle , Collapse , Nav ,Container ,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import logoBlack from './assets/images/logo.png'
import logoWhite from './assets/images/logo-white.png'
import './assets/Header.scss'

function Header() {
    const [drawerOpen, setDrwaerOpen] = useState(false)
    const handleClick = () =>{
        
        setDrwaerOpen(!drawerOpen)        
    }

    useEffect(() => {
        
    }, [drawerOpen])

    return (
        <header className="header">
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">
                           {!drawerOpen &&  <img src={logoBlack} alt="logo-black" className="navbar-brand-logo-1" />}
                            {drawerOpen && <img src={logoWhite} alt="logo-black" className="navbar-brand-logo-2" />}
                        </Navbar.Brand>
                        <Navbar.Toggle
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={handleClick}
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto ">
                                <Link to="/" class="nav-link">Home</Link>
                                <Link to="/About" class="nav-link">About Us</Link>
                                <Link to="/Services" class="nav-link">Services</Link>
                                <Link to="/Portfolio" class="nav-link">Portfolio</Link>
                                <Link to="/Blog" class="nav-link">Blog</Link>
                                <Link to="/Contact" class="nav-link">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                </Container>
        </header>
    )
}

export default Header
