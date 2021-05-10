import React from 'react'
import { Container, Row, Col, Accordion, Button, Card } from 'react-bootstrap'


const Description = () => {
    return (

        <div>
            <h2>Description</h2>
            <Container>
                <p>Monte Carlo simulation is a method used to approximate numerical values. One example is approximating &pi;.  </p>

                <p>Sample random number from [-1,1] from a uniform distribution and check if it lies inside/outside the unit circle. Approximate &pi; using the area of the circle and the square from [-1,1]</p>

                <Row>
                    <Col style={{ textAlign: "center" }}>
                        <h5>
                            &pi; =  4 A<sub>circle</sub> &frasl; A<sub>square</sub> =  4 (inside / (inside + outside))
                        </h5>
                    </Col>
                </Row>


            </Container>
            <hr style={{ margin: "20px", }}></hr>
        </div >

    )
}

export default Description