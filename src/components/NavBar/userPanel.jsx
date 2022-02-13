import React, { useState } from 'react';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const UserPanel = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth ()
    const handleLogout = async () =>{
        setError('')
        try {
            await logout()
            navigate('/login');
        } catch{
            setError ('Error')
        }
    }

    return(
        <Container>
            <Card>
                <Card.Body>
                    <h1 className ="text-center mb-4">Panel de usuario</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    
                    { (currentUser !== null) ? (
                        <div>
                            <p><strong>Email:</strong> {currentUser.email} </p>
                            <Link to='/update' className='btn btn-primary w-100'> Modificar Perfil</Link>
                        </div>
                    ):(
                        <div>
                             <Link to='/login' className='btn btn-primary w-100'> Iniciar Sesión </Link>
                        </div>
                    )}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            { currentUser !== null &&<Button variant='danger' onClick={handleLogout}> Log Out </Button>}
            </div>
        </Container>


    )
}

export default UserPanel;