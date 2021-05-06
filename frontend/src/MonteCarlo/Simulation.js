import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'

import "./styles.css"

const Simulation = () => {
    // set state

    return (
        <div>

            <h2> Parameters</h2>

            <Container>

                <Row>
                    <Col>
                        <Form.Label>
                            <strong>
                                Iterations
                                    </strong>
                        </Form.Label>

                        <Form.Control 
                            type="points" 
                            placeholder="10000" 
                            style={{  width: "80%" }}
                        />

                        <input
                            type="range"
                            min="1"
                            max="10000"
                            name='simulation_value'
                            style={{ height: "50%", width: "80%" }}
                        // value={this.state.simulation_value} 
                        // onChange={(e) => {this.handleChange(e)}}
                        />
                    </Col>
                    <Col>
                        <Form.Label>
                            <strong>
                                Frame Rate
                            </strong>
                        </Form.Label>

                        <Form.Control 
                            type="points" 
                            placeholder="10000" 
                            style={{  width: "80%" }}
                        />

                        <input
                            type="range"
                            min="1"
                            max="10000"
                            name='simulation_value'
                            style={{ height: "50%", width: "80%" }}
                        // value={this.state.simulation_value} 
                        // onChange={(e) => {this.handleChange(e)}}
                        />

                    </Col>

                    <Col style={{marginTop:"80px"}}>
                        <Button variant="success" type="submit">
                            Simulate
                                </Button>
                        <Button variant="secondary" type="submit">
                            Reset
                                </Button>
                    </Col>
                </Row>
            </Container>


          

            <h2 style={{ marginTop: "50px", }} >Simulation </h2>


            <Container >
                <Row
                    className="d-flex justify-items-center"
                >


                    {/* Get rid of the borders when hover image */}
                    <Image
                        src="../images/figure_0.png"
                        className="rounded mx-auto d-block"
                        width="95%"
                        // styles={{outline: "10px solid #26abff"}}
                        fluid
                    />



                </Row>
            </Container>


        </div>
    )
}

export default Simulation