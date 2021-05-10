import React from 'react'
import { Navbar, Nav,  Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Monte Carlo Simulation </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/pi">
                                <Nav.Link>&pi;</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/protein'>
                                <Nav.Link href="/protein"> Protein Movement</Nav.Link>
                            </LinkContainer> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    )
}

export default Header