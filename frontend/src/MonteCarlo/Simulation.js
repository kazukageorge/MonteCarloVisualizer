import React, { useState, Component } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Plot from 'react-plotly.js';
import Loader from '../components/Loader'


class Simulation extends Component {
    state = {
        data: [
            { 'x': [0.1], 'y': [0.1], 'color': '#FF0000' },
            { 'x': [0.1, 0.2], 'y': [0.1, 0.2], 'color': '#FF0000' },
            { 'x': [0.1, 0.2, 0.3], 'y': [0.1, 0.2, 0.3], 'color': '#FF0000' },

        ],
        loading: this.props.loading,
        currentFrame: 0,

        // simulate: this.props.iteration,
        // framerate: this.props.framerate,
        // runSimulation: false,
    }

    componentDidMount() {

        //     let startSimulation = this.props.startSimulation

        //     if (startSimulation) {
        //         const min = -1
        //         const max = 1
        //         for (let i = 0; i < this.props.iteration; i++) {
        //             // console.log(i)
        //             let x = min + Math.random() * (max - min)
        //             let y = min + Math.random() * (max - min)
        //             let color = ''

        //             if (x * x + y * y > 1) {
        //                 color = '#FF0000'
        //             } else {
        //                 color = '#45b6fe'
        //             }
        //             if (i == 0) {
        //                 this.setState({
        //                     data: this.state.data.push({
        //                         'x': [x],
        //                         'y': [y],
        //                         'color': [color]
        //                     })
        //                 })
        //             } else {
        //                 var X = Array(...this.state.data[i - 1].x, x)
        //                 var Y = Array(...this.state.data[i - 1].y, y)
        //                 var Color = Array(...this.state.data[i - 1].color, color)

        //                 var newData = { 'x': X, 'y': Y, 'color': Color }
        //                 this.setState({
        //                     data: this.state.data.push(newData)
        //                 })
        //             }
        //             // console.log(this.state)
        //         }
        //         console.log(this.state.data)
        //     }
        this.setState({
            loading: false
        })
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

    iterationChangeHandler = (e) => {
        const value = e.target.value
        this.setState({
            currentFrame: value
        })
        // if (this.state.framerate > this.state.iteration) {
        //     this.setState({
        //         framerate: value
        //     })
        // }
    }




    render() {
        console.log(this.state.currentFrame)

        // console.log(this.state.data)
        // {
        //     this.state.data.map((d) => (
        //         console.log(d)
        //     ))
        // }
        // const plots = this.state.data.map((d, index) => {
        //     return (
        //         <div key={index}>
        // <Plot
        //     data={[
        //         {
        //             x: d.x,
        //             y: d.y,
        //             type: 'scatter',
        //             mode: 'markers',
        //             marker: { color: d.color },
        //         },
        //         // { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        //     ]}
        //     layout={{ width: "80wh", height: "80vh" }}
        // // key={index}
        // />
        //         </div>
        //     )
        // })


        // console.log(plots)
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


