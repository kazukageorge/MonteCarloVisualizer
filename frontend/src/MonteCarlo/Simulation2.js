import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Plot from 'react-plotly.js';
import Loader from '../components/Loader'
import axios from 'axios'



function Simulation2({ iteration, framerate }) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [currentFrame, setCurrentFrame] = useState(0)


    useEffect(() => {
        if (loading) {
            async function getData(iteration, framerate) {
                const { data } = await axios.get(`http://127.0.0.1:8000/MonteCarlo/iteration=${iteration}_framerate=${framerate}`)
                setData(data)
                setLoading(false)
                // console.log(data)
            }
            getData(iteration, framerate)
        }
    })


    const iterationChangeHandler = (e) => {
        const value = e.target.value
        setCurrentFrame(value)
    }

    console.log(framerate)



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
                            <Col >

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
                                            marker: { color: data.circle.color },
                                        },
                                    ]}
                                    layout={{
                                        width: window.innerWidth / 2.5 < window.innerHeight / 2.5 ? window.innerWidth / 2.5 : window.innerHeight / 2.5,
                                        height: window.innerWidth / 2.5 < window.innerHeight / 2.5 ? window.innerWidth / 2.5 : window.innerHeight / 2.5,
                                        // width: "300",
                                        // height: "300",
                                        margin: {
                                            l: 40,
                                            r: 40,
                                            b: 40,
                                            t: 40,
                                            pad: 0
                                        },
                                        showlegend: false,
                                        xaxis: {
                                            range: [-1.1, 1.1]
                                        },
                                        yaxis: {
                                            range: [-1.1, 1.1]
                                        },
                                        font: {
                                            family: 'Helvetica',
                                            size: 16
                                        },
                                    }}
                                // key={index}
                                />
                            </Col>

                            <Col >

                                <Plot
                                    data={[
                                        {
                                            x: data.points[currentFrame].approx_pi_x,
                                            y: data.points[currentFrame].approx_pi_y,
                                            name: 'Approximation',
                                            marker: { color: "black" },
                                            mode: 'lines',
                                            line: {
                                                width: 3
                                            },

                                        },
                                        {
                                            x: data.Pi.x,
                                            y: data.Pi.y,
                                            name: 'pi',
                                            mode: 'lines',
                                            line: {
                                                dash: 'dashdot',
                                                width: 1
                                            },
                                            marker: { color: "black" },
                                        }

                                    ]}
                                    layout={{
                                        width: window.innerWidth / 2.5 < window.innerHeight / 2.5 ? window.innerWidth / 2.5 : window.innerHeight / 2.5,
                                        height: window.innerWidth / 2.5 < window.innerHeight / 2.5 ? window.innerWidth / 2.5 : window.innerHeight / 2.5,

                                        margin: {
                                            l: 40,
                                            r: 40,
                                            b: 60,
                                            t: 40,
                                            pad: 0
                                        },
                                        showlegend: true,
                                        legend: {
                                            x: 1,
                                            xanchor: 'right',
                                            y: 0
                                          },
                                        xaxis: {
                                            range: [0, iteration],
                                            title: 'Iterations',
                                            tick0: 0,
                                            dtick: framerate,
                                        },
                                        yaxis: {
                                            range: [0, 4],
                                            tick0: 0,
                                            dtick: 1,
                                        },
                                        font: {
                                            family: 'Helvetica',
                                            size: 16
                                        },


                                    }}
                                // key={index}
                                />
                            </Col>


                            <input
                                type="range"
                                min={0}
                                // max={this.props.iteration / this.props.framerate}
                                max={(iteration / framerate)}
                                name='simulation_value'
                                style={{ height: "50%", width: "100%" }}
                                step={1}
                                value={currentFrame}
                                onChange={(e) => iterationChangeHandler(e)}
                            />
                        </Row>

                        <h3 style={{ textAlign: "center", marginTop: "10px" }}> Frame #{currentFrame} </h3>
                        <h3 style={{ textAlign: "center" }}> Iteration #{currentFrame * framerate} </h3>


                        <Row style={{ marginTop: "40px" }}>

                            <Col >
                                <h3 style={{ color: "#45b6fe", textAlign: "center" }}>
                                    Inside
                                </h3>
                                <h3 style={{ color: "black", marginTop: "10px", textAlign: "center" }}>
                                    {data.points[currentFrame].inside}
                                </h3>
                            </Col>
                            <Col >
                                <h3 style={{ color: "#FF0000", textAlign: "center" }}>
                                    Outside
                                </h3>
                                <h3 style={{ color: "black", marginTop: "10px", textAlign: "center" }}>
                                    {data.points[currentFrame].outside}
                                </h3>

                            </Col>
                            <Col >
                                <h3 style={{ color: "black", textAlign: "center" }}>
                                    &pi;
                                </h3>
                                <h3 style={{ marginTop: "10px", textAlign: "center" }}>
                                    {data.points[currentFrame].approx_pi.toFixed(5)}
                                </h3>

                            </Col>
                        </Row>





                    </Container>

            }



        </div >

    )
}

export default Simulation2


