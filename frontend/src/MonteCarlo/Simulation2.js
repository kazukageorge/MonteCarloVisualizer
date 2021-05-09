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
                const { data } = await axios.get(`http://127.0.0.1:8000/MonteCarlo/iteration=${iteration}_burn=${framerate}`)
                setData(data)
                setLoading(false)
                console.log(data)
            }
            getData(iteration, framerate)

        }

    })


    const iterationChangeHandler = (e) => {
        const value = e.target.value
        setCurrentFrame(value)
    }

    // console.log(currentFrame, framerate)
    // console.log(data)
    console.log((iteration/ framerate))


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
                                            marker: { color: data.circle.color },
                                        },
                                    ]}
                                    layout={{
                                        width: window.innerWidth / 1.8 < window.innerHeight / 1.8 ? window.innerWidth / 1.8 : window.innerHeight / 1.8,
                                        height: window.innerWidth / 1.8 < window.innerHeight / 1.8 ? window.innerWidth / 1.8 : window.innerHeight / 1.8,
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
                                min={0}
                                // max={this.props.iteration / this.props.framerate}
                                max={(iteration/ framerate) }
                                name='simulation_value'
                                style={{ height: "50%", width: "100%" }}
                                step={1}
                                value={currentFrame}
                                onChange={(e) => iterationChangeHandler(e)}
                            />
                        </Row>

                        <h3 style={{ textAlign: "center", marginTop:"10px" }}> Frame #{currentFrame } </h3>
                        <h3 style={{ textAlign: "center"}}> Iteration #{currentFrame * framerate } </h3>


                        <Row style={{ marginTop: "40px" }}>

                            <Col >
                                <h3 style={{ color: "#45b6fe", textAlign: "center" }}>
                                    Points Inside
                                  
                                     
                                    
                                </h3>
                                <h3 style={{ color: "black", marginTop:"10px", textAlign: "center"  }}>
                                            {data.points[currentFrame].inside}
                                        </h3>

                            </Col>
                            <Col >
                                <h3 style={{ color: "#FF0000", textAlign: "center" }}>
                                    Points Outside
                                  
                                        
                                    
                                </h3>
                                <h3 style={{ color: "black", marginTop:"10px" , textAlign: "center"}}>
                                            {data.points[currentFrame].outside}
                                        </h3>

                            </Col>
                            <Col >
                                <h3 style={{ color: "black", textAlign: "center" }}>
                                    &pi; 
                                  
                                     
                                    
                                </h3>
                                <h3 style={{marginTop:"10px" , textAlign: "center"}}>
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


