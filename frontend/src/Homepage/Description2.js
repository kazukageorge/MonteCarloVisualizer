import React from 'react'
import { Container } from 'react-bootstrap'


const Description = () => {
    return (

        <div>
            <h2>Description</h2>
            <Container>

                <p>Here we present projects using Monte Carlo simulations. </p>
                <ol>
                    <li>Approximating &pi;</li>
                    <li>Predicting protein movement (published in a peer-reviewed journal, selected as the &nbsp;
                         <a
                            href="https://onlinelibrary.wiley.com/doi/10.1111/tra.12639"
                            style={{ 'color': "#26abff" }}
                            target="_blank"
                        >
                            paper of the month
                        </a>
                    )
                    </li>
                </ol>



            </Container>

            <h2>Tech Stacks</h2>
            <Container>

                <ol>
                    <h3>
                        <li>
                            Frontend
                      </li>
                    </h3>
                    

                    <ul>
                        <li>
                            React
                        </li>
                    </ul>
                    <h3>
                        <li>
                            Backend
                      </li>
                    </h3>
                    <ul>
                        <li>
                            Django
                        </li>

                    </ul>
                    <h3>
                        <li>
                            API call
                      </li>
                    </h3>
                    <h3>
                    <ul>
                       
                            <li>

                                Django Rest Framework (API call via axios from frontend)

                        </li>

                    </ul>
                    </h3>

                </ol>

            </Container>
            <hr style={{ margin: "20px", }}></hr>
        </div>

    )
}

export default Description