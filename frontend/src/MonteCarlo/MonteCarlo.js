import React from 'react'
import { Form, Container } from 'react-bootstrap';
import Description from './Description'
import Simulation from './Simulation'
// import Footer from './Footer'


const MonteCarlo = () => (
    <Container >

        <div>
            <h1 style={{marginBottom:"20px", marginTop:"40px"}}>
                <strong>
                    Approximating &pi;

                </strong>
            </h1>
                <Description />

                <Simulation />
        </div>
    </Container>

)


export default MonteCarlo