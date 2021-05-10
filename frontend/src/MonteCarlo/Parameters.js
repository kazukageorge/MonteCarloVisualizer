import React, { Component } from 'react';
import { useDebugValue } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Simulation2 from './Simulation2'

import "./styles.css"

class Parameters extends Component {
    // set state

    state = {
        'iteration': 1000,
        'framerate': 100,
        'showSimulation': false,
        'disableSimulationButton': false,
        'successButtonVariant': "success",
        'resetButtonVariant': "secondary",

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
        let value = e.target.value
        if (value === 0)
            value = 1
        document.getElementById("points").value = value
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

    async resetHandler () {

        document.getElementById("points").value = 1000;

        // this.setState({
        //     iteration: 1000,
        //     framerate: 100,
        //     showSimulation: false,
        //     disableSimulationButton: false,
        //     successButtonVariant:  "success",
        //     resetButtonVariant:"secondary",

        // })

        await this.setStateAsync({ iteration: 1000, });
        await this.setStateAsync({  framerate: 100, });
        await this.setStateAsync({  showSimulation: false,});
        await this.setStateAsync({ disableSimulationButton: false});
        await this.setStateAsync({  successButtonVariant:  "success",});
        await this.setStateAsync({  resetButtonVariant:"secondary",});


    }

    async simulateOnClickHandler() {
        await this.setStateAsync({ showSimulation: true, });
        await this.setStateAsync({ disableSimulationButton: true });
        await this.setStateAsync({ successButtonVariant: "secondary" });
        await this.setStateAsync({ resetButtonVariant: "info" });



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
                                id="points"
                                type="points"
                                placeholder={this.state.iteration}
                                style={{ width: "80%" }}
                                onChange={(e) => this.iterationChangeHandler(e)}
                                disabled={this.state.disableSimulationButton}
                            />

                            <input
                                type="range"
                                min="0"
                                max="10000"
                                name='simulation_value'
                                style={{ height: "50%", width: "80%" }}
                                step="100"
                                value={this.state.iteration - 1}
                                onChange={(e) => this.iterationChangeHandler(e)}
                                disabled={this.state.disableSimulationButton}
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

                            {/* <Form.Control
                                type="points"
                                placeholder={this.state.framerate}
                                style={{ width: "80%" }}
                                onChange={(e) => this.framerateChangeHandler(e)}
                                text={100}



                            /> */}

                            <Form.Control
                                as='select'
                                value = {this.state.framerate}
                                onChange={(e) => this.framerateChangeHandler(e)}
                                style={{width:"80%"}}
                                disabled={this.state.disableSimulationButton}
                            >
                                <option value={1}>1</option>
                                <option value={10}>10</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={500}>500</option>
                                <option value={1000}>1000</option>

                            </Form.Control>


                            <input
                                type="range"
                                min={1}
                                max={this.state.iteration < 1000 ? this.state.iteration : 1000}
                                // step={10}
                                name='iteration'
                                style={{ height: "50%", width: "80%" }}
                                value={this.state.framerate}
                                onChange={(e) => this.framerateChangeHandler(e)}
                                disabled={this.state.disableSimulationButton}
                            />

                        </Col>

                        <Col style={{ marginTop: "80px" }}>
                            <Button
                                variant={this.state.successButtonVariant}
                                type="submit"
                                onClick={() => this.simulateOnClickHandler(this.props.iteration, this.props.framerate)}
                                disabled={this.state.disableSimulationButton}
                            >
                                Simulate
                            </Button>
                            <Button
                                variant={this.state.resetButtonVariant}
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