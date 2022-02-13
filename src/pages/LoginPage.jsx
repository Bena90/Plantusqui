import React from 'react'
import { Container } from 'react-bootstrap'
import Login from '../components/signUp/login'


const LoginPage = () => {



    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "60vh"}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
                <Login/>
            </div>
        </Container>
    )
}

export default LoginPage
