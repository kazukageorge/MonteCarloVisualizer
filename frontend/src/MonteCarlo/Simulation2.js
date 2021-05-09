import React, { useState, Component, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Plot from 'react-plotly.js';
import Loader from '../components/Loader'
import axios from 'axios'



function Simulation2({ iteration }) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [currentFrame, setCurrentFrame] = useState(0)

    useEffect(() => {
        if (loading) {
            async function getData(iteration) {
                const { data } = await axios.get(`http://127.0.0.1:8000/MonteCarlo/${iteration}`)
                setData(data)
                setLoading(false)
            }
            getData(iteration)

        }

    })


    const iterationChangeHandler = (e) => {
        const value = e.target.value
        setCurrentFrame(value)
    }


    return (
        <div>
            <h2 style={{ marginTop: "10px" }} >Simulation </h2>
            {
                loading ?
                    <Loader />
                    :
                    <Container >
                        <Row
                            className="d-flex justify-items-center"
                        >
                        </Row>
                        <Row>
                            {/* {plots} */}
                            <Col md={{ span: 6, offset: 3 }}>

                                <Plot
                                    data={[
                                        {
                                            x: data.points[currentFrame].x,
                                            y: data.points[currentFrame].y,
                                            type: 'scatter',
                                            mode: 'markers',
                                            marker: { color: data.points[currentFrame].color },
                                        },
                                        {
                                            x: data.circle.x,
                                            y: data.circle.y,
                                            mode: 'line',
                                            marker: {color: data.circle.color},
                                        },
                                    ]}
                                    layout={{
                                        width: window.innerWidth / 1.4 < window.innerHeight / 1.4 ? window.innerWidth / 1.4 : window.innerHeight / 1.4,
                                        height: window.innerWidth / 1.4 < window.innerHeight / 1.4 ? window.innerWidth / 1.4 : window.innerHeight / 1.4,
                                        // width: "300px",
                                        // height: "300px",
                                        margin: {
                                            l: 60,
                                            r: 60,
                                            b: 60,
                                            t: 60,
                                            pad: 0
                                        },
                                        showlegend: false, 
                                        xaxis: {
                                            range: [-1.1, 1.1]
                                        },
                                        yaxis: {
                                            range: [-1.1, 1.1]
                                        }
                                    }}
                                // key={index}
                                />
                            </Col>


                            <input
                                type="range"
                                min="0"
                                // max={this.props.iteration / this.props.framerate}
                                max={iteration - 1}
                                name='simulation_value'
                                style={{ height: "50%", width: "80%" }}
                                step="1"
                                value={currentFrame}
                                onChange={(e) => iterationChangeHandler(e)}
                            />
                            <p> Frame #{currentFrame} </p>

                        </Row>



                    </Container>

            }



        </div >

    )
}

export default Simulation2

