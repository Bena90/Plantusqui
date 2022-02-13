import React from 'react'
import { Container } from "react-bootstrap"
import UpdateProfile from '../components/signUp/updateProfile';

const UpdateProfilePage = () =>{

    return(
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "60vh"}}>
            <UpdateProfile/>
        </Container>
    );
};

export default UpdateProfilePage