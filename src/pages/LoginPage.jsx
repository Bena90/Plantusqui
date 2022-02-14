import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Login from '../components/signUp/login'
import login from '../assets/Login.png'

const LoginPage = () => {

    return (
        <Container className="d-flex align-items-center justify-content-center col-12 mt-4 mb-4" style={{minHeight: "60vh"}}>
            <Row>
                <Col className="d-flex align-items-center justify-content-center col-12 col-sm-12 col-lg-6">
                    <div className='w-100 ' style={{maxWidth:'400px'}}>
                        <Login/>
                    </div>
                </Col>
                <Col className="col-lg-6 col-sm-12">
                    <div >
                        <img className=" d-none d-lg-block d-print-block w-100" src={login} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage
