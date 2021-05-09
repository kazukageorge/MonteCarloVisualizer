import React, { useState, Component } from 'react';
import { useDebugValue } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Simulation from './Simulation'
import Simulation2 from './Simulation2'

import "./styles.css"

class Parameters extends Component {
    // set state

    state = {
        'iteration': 1000,
        'framerate': 10,
        'showSimulation': false,
    };

    componentDidMount() {
        this.setState({
            showSimulation: false,
        })
    }

    componentDidUpdate() {

        // Toggle bar update 
        if (Number(this.state.framerate) > Number(this.state.iteration)) {
            this.setState({
                framerate: Number(this.state.iteration)
            })
        }
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
        let value = e.target.value

        if (value > 500) {
            value = 1000
        } else if (value > 200) {
            value = 500
        } else if (useDebugValue > 100) {
            value = 200
        } else if (value > 50) {
            value = 100
        } else if (value > 20) {
            value = 50
        } else if (value > 10) {
            value = 20
        } else if (value > 5) {
            value = 10
        } else if (value > 2) {
            value = 5
        } else if (value > 1) {
            value = 2
        }


        this.setState({
            framerate: value
        })
    }

    resetHandler = () => {

        this.setState({
            iteration: 1000,
            framerate: 10,
            showSimulation: false,
        })

    }

    async simulateOnClickHandler() {
        await this.setStateAsync({ showSimulation: true });
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
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
                                // disabled={true}
                                onChange={(e) => this.iterationChangeHandler(e)}
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
                                onChange={(e) => this.framerateChangeHandler(e)}

                            />

                            <input
                                type="range"
                                min="1"
                                max={this.state.iteration < 1000 ? this.state.iteration : 1000}
                                step={1}
                                name='iteration'
                                style={{ height: "50%", width: "80%" }}
                                value={this.state.framerate}
                                onChange={(e) => this.framerateChangeHandler(e)}
                            />

                        </Col>

                        <Col style={{ marginTop: "80px" }}>
                            <Button
                                variant="success"
                                type="submit"
                                onClick={() => this.simulateOnClickHandler(this.props.iteration, this.props.framerate)}
                            >
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
                    < hr />

                </Container>
                {this.state.showSimulation ?
                    // <Simulation
                    //     startSimulation={true}
                    //     iteration={this.state.iteration}
                    //     framerate={this.state.framerate}
                    //     loading={true}
                    // />

                    <Simulation2
                        iteration={this.state.iteration}
                        framerate={this.state.framerate}
                    />
                    :
                    <div>
                        <h2 style={{ marginTop: "10px" }} >Simulation </h2>

                    </div>


                }




            </div>
        )

    }

}

export default Parameters