import React from 'react';
import { Container } from 'react-bootstrap';
import UserPanel from '../components/NavBar/userPanel';
import Orders from '../components/orders/orders';

const PanelUser = () => {

    return(
        <Container className="mt-4 d-flex flex-column align-items-center justify-content-center" style={{minHeight: "60vh"}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
                <UserPanel/>
            </div>
            <hr />
            <div>
                <h2 className="panelTitle"> Historial de ordenes:</h2>
                <Orders/>
            </div>
        </Container>
    );
};

export default PanelUser;