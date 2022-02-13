import React from 'react';
import { Container } from 'react-bootstrap';
import UserPanel from '../components/NavBar/userPanel';

const PanelUser = () => {


    return(
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "60vh"}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
                <UserPanel/>
            </div>
        </Container>
    )
}

export default PanelUser;