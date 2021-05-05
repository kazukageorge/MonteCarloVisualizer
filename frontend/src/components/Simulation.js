import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

const Simulation = () => {
    return (
        <div>
            <h2>Simulation</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter the number of random simulation points</Form.Label>
                    <Form.Control type="email" placeholder="Enter Number" />

                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
  </Button>
                <Button variant="primary" type="submit">
                    Reset
  </Button>
            </Form>

        </div>
    )
}

export default Simulation