import React from "react";
import { Container } from "react-bootstrap";
import Signup from "../components/signUp/signUp"

const SignUpPage = () => {
    return(
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "60vh"}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
                <Signup/>
            </div>
        </Container>
    )
}

export default SignUpPage;