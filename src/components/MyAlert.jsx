import { Alert } from 'react-bootstrap'
import React from 'react'

// MyAlert does not need to change the state
// it will just receive the selected piggy from App

const MyAlert = ({ selected }) => (
    <Alert variant="success" >
        {selected || 'No Character Selected'}
    </Alert>
)

export default MyAlert