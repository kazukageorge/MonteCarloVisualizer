import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <div 
            style={{ marginTop: "50px" }}
        >
            <Spinner
                animation='border'
                role='status'
                style={{
                    height: '100px',
                    width: '100px',
                    margin: 'auto',
                    display: 'block'
                }}
            >
                <span className='sr-only'>Loading...</span>
            </Spinner>
            <h2 style={{textAlign: 'center', marginTop: "50px"}}>Loading...</h2>
        </div>

    )
}

export default Loader
