import React from 'react'
import { Container } from 'react-bootstrap'


const Description = () => {
    return (

        <div>
            <h2>Description</h2>
            <Container>

                <p>Here we present projects using Monte Carlo simulations. The first is approximating &pi; and the second is simulating how proteins move inside cells. The latter work has been published and has been chosen for the paper of the month.</p>
                <p>Image of publication here</p>
            </Container>

            <h2>Tech Stacks</h2>
            <Container>

                <p> Detailed explation here</p>
            </Container>
            <hr style={{ margin: "20px", }}></hr>
        </div>

    )
}

export default Description