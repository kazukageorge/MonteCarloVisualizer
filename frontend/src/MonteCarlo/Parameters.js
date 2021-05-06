import React, { useState, Component } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'

import "./styles.css"

class Parameters extends Component {
    // set state

    state = {
        'iteration': 1000,
        'framerate': 10,
    };

    componentDidUpdate(prevProps, prevState) {

        // Toggle bar update 
        const framerate = Number(this.state.framerate)
        const iteration = Number(this.state.iteration)

        if (framerate > iteration) {
            this.setState({
                framerate: iteration
            })
        }

        // Simulation rendering

    }


    iterationChangeHandler = (e) => {
        const value = e.target.value
        this.setState({
            iteration: value
        })
        if (this.state.framerate > this.state.iteration) {
            this.setState({
                framerate: value
            })
        }
    }

    framerateChangeHandler = (e) => {
        const value = e.target.value

        if (this.state.framerate > this.state.framerateiteration) {
            this.setState({
                framerate: this.state.iteration
            })
        } else {
            this.setState({
                framerate: value
            })
        }
    }

    resetHandler = () => {
        this.setState({
            iteration: 1000,
            framerate: 10,
        })
    }

    render() {
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
                                placeholder={this.state.iteration}
                                style={{ width: "80%" }}
                            />

                            <input
                                type="range"
                                min="1"
                                max="10000"
                                name='simulation_value'
                                style={{ height: "50%", width: "80%" }}
                                // step = "50"
                                value={this.state.iteration}
                                onChange={(e) => this.iterationChangeHandler(e)}
                            />
                        </Col>
                        <Col>

                            {/* Change framerate to a dropdown
                        1 2 5 10 50 100 200 500 1000 */}
                            <Form.Label>
                                <strong>
                                    Frame Rate
                                </strong>
                            </Form.Label>

                            <Form.Control
                                type="points"
                                placeholder={this.state.framerate}
                                style={{ width: "80%" }}
                            />

                            <input
                                type="range"
                                min="1"
                                max={this.state.iteration}
                                // step="10"
                                name='iteration'
                                style={{ height: "50%", width: "80%" }}
                                value={this.state.framerate}
                                onChange={(e) => this.framerateChangeHandler(e)} />

                        </Col>

                        <Col style={{ marginTop: "80px" }}>
                            <Button variant="success" type="submit">
                                Simulate
                                    </Button>
                            <Button
                                variant="secondary"
                                type="submit"
                                onClick={() => this.resetHandler()}
                            >
                                Reset
                            </Button>
                        </Col>
                    </Row>
                < hr/>

                </Container>
              


            </div>
        )

    }

}

export default Parameters