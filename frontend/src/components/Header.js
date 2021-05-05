import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
                <Container>

                    <Navbar.Brand href="/">Monte Carlo Simulation </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/pi"><i className="fas fa-pi"></i>&pi;</Nav.Link>
                            <Nav.Link href="/protein"> Protein Movement</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    )
}

export default Header