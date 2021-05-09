import React, { useState, Component } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Plot from 'react-plotly.js';
import Loader from '../components/Loader'
import axios from 'axios'


class Simulation extends Component {


    state = {
        data: [
        ],
        loading: true,
        currentFrame: 0,

        // simulate: this.props.iteration,
        // framerate: this.props.framerate,
        // runSimulation: false,
    }

    componentDidMount() {

        console.log(this.props)

        async function getData(iteration) {
            console.log(iteration)
            const {data} = await axios.get(`http://127.0.0.1:8000/MonteCarlo/${iteration}`)
            this.setState({
                data: data,
                loading: false
            })
        }

        getData(this.props.iteration)

      
    }



    iterationChangeHandler = (e) => {
        const value = e.target.value
        this.setState({
            currentFrame: value
        })
    }




    render() {
        console.log(this.state.currentFrame)

       
        return (
            <div>
                <h2 style={{ marginTop: "10px" }} >Simulation </h2>
                {
                    this.state.loading ?
                        <Loader />
                        :
                        <Container >
                            <Row
                                className="d-flex justify-items-center"
                            >
                            </Row>
                            <Row>
                                {/* {plots} */}
                                <Col  md={{ span: 6, offset: 3 }}>

                                <Plot
                                    data={[
                                        {
                                            x: this.state.data[this.state.currentFrame].x,
                                            y: this.state.data[this.state.currentFrame].y,
                                            type: 'scatter',
                                            mode: 'markers',
                                            marker: { color: this.state.data[this.state.currentFrame].color },
                                        },
                                        // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                                    ]}
                                    layout={{
                                        width: window.innerWidth / 1.4 < window.innerHeight / 1.4 ? window.innerWidth / 1.4  : window.innerHeight / 1.4 ,
                                        height: window.innerWidth / 1.4 < window.innerHeight / 1.4 ? window.innerWidth / 1.4  : window.innerHeight / 1.4 ,
                                        margin: {
                                            l: 50,
                                            r: 50,
                                            b: 50,
                                            t: 10,
                                            pad: 4
                                        },
                                    }}
                                // key={index}
                                />
                                </Col>


                                <input
                                    type="range"
                                    min="0"
                                    // max={this.props.iteration / this.props.framerate}
                                    max={2}
                                    name='simulation_value'
                                    style={{ height: "50%", width: "80%" }}
                                    step="1"
                                    value={this.state.currentFrame}
                                    onChange={(e) => this.iterationChangeHandler(e)}
                                />
                                <p> Frame #{this.state.currentFrame + 1} </p>

                            </Row>



                        </Container>

                }



            </div >

        )
    }
}

export default Simulation


