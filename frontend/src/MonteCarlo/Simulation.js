import React, { useState, Component } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'


class Simulation extends Component {
    state = {
        "simulationImages": {},
    }

    // componentDidUpdate() {
    //     // Check if new images are here
    //     console.log("[Simulation] ComponentDidUpdate")
    //     async function fetchImages() {

    //         const {data} = await axios.get("http://127.0.0.1:8000/MonteCarlo/SimulationImages")
    //         this.setState({
    //             "simulationImages": data,
    //         })
    //     }

    //     fetchImages()
    // }

    render() {
        return (
            <div>
                <h2 style={{ marginTop: "10px"}} >Simulation </h2>
                <Container >
                    <Row
                        className="d-flex justify-items-center"
                    >


                        {/* Get rid of the borders when hover */}
                        <Image
                            src="../images/figure_0.png"
                            className="rounded mx-auto d-block"
                            width="95%"
                            // styles={{outline: "10px solid #26abff"}}
                            fluid="true"
                        />



                    </Row>
                </Container>
            </div>

        )
    }
}

export default Simulation

