import { Container } from 'react-bootstrap'
import Description from './Description'
import Navigation from './Navigation'

const Homepage = () => {
    return (
        <Container>
            <div>
                <h1 style={{ marginBottom: "20px", marginTop: "40px" }}>
                    <strong>
                        Homepage
                </strong>
                </h1>

                <Description />

                <Navigation />

            </div>
        </Container>

    )
}

export default Homepage
