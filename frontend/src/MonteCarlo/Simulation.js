import React from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'

const Simulation = () => {
    return (
        <div>

            <h2>Simulation</h2>
            <Container>


                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Row class="d-flex justify-items-center">
                            <Col md={3}>
                                <Form.Label>
                                    <strong>
                                        Enter simulation points
                                    </strong>
                                </Form.Label>
                            </Col>

                            <Col md={3} >
                                <Form.Control type="points" placeholder="10000" />
                            </Col>
                            <Col>
                                <Button variant="success" type="submit">
                                    Simulate
                                </Button>
                                <Button variant="secondary" type="submit">
                                    Reset
                                </Button>
                            </Col>
                        </Row>


                    </Form.Group>




                </Form>
            </Container>


        </div>
    )
}

export default Simulation