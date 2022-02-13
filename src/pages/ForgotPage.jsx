import React from 'react'
import { Container } from 'react-bootstrap'
import ForgotPassword from '../components/signUp/forgot'
import './pages.scss'

const ForgotPage = () => {

    return(
        <Container>
            <h1>Olvidaste la contra champi?</h1>
            <ForgotPassword/>
        </Container>
    )
}

export default ForgotPage;