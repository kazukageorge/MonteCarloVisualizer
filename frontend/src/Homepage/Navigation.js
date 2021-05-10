import React from 'react'
import { Container, Row, Col, Image,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Footer from '../components/Footer'
import './stylesHomepage.css'


const Navigation = () => {
    return (

        <div>
            {/* <h2>Projects</h2> */}
            <Container>
                <Row>
                    <LinkContainer to='/pi' style={{ cursor: "pointer" }}>

                        <Col>
                            <img
                                src="../images/montecarlo.png"
                                className="rounded mx-auto d-block"
                                width="95%"
                                style={{hover: ''}}
                                fluid="true"
                                alt="pi"
                            />
                             {/* <img
                                src="montecarlo.png"
                                className="rounded mx-auto d-block"
                                width="95%"
                                style={{hover: ''}}
                                fluid="true"
                                alt="pi"
                            /> */}
                            <h4 className='text-center' >
                                <strong className="txt" >
                                    Approximating &pi;
                            </strong>
                            </h4>

                        </Col>
                    </LinkContainer>

                    {/* <LinkContainer to='/protein' style={{ cursor: "pointer" }}>

                        <Col>
                            <Image
                                src="../images/figure_0.png"
                                className="rounded mx-auto d-block"
                                width="95%"
                                fluid
                            />
                            <h4 className='text-center' >
                                <strong className="txt">
                                    Protein Movement
                            </strong>
                            </h4>

                        </Col>
                    </LinkContainer> */}

                </Row>

                {/* <hr /> */}

                {/* <Row>
                    <LinkContainer to='/protein' style={{ cursor: "pointer" }}>

                        <Col>
                            <Image
                                src="../images/tugofwar.gif"
                                className="rounded mx-auto d-block"
                                width="95%"
                                alt="protein"
                                fluid
                            />
                            <h4 className='text-center' >
                                <strong className="txt">
                                    Protein Movement
    </strong>
                            </h4>

                        </Col>
                    </LinkContainer>
                </Row> */}


            </Container>


        </div>

    )
}

export default Navigation