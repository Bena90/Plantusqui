import React, { useRef, useState } from 'react';
import { Form, Card, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './signUp.scss';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { resetPassword } = useAuth();
    const emailRef = useRef();
    const [ error, setError] = useState('');
    const [ message, setMessage ] = useState('');
    const [ isLoading, setIsLoading ] = useState (false);
    
    const handleSubmit = async (e) =>{
        e.preventDefault ();
        try {
            setMessage('')
            setError ('')
            setIsLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage ('Te enviamos la información al mail!')
        } catch {
            setError ("Error en el recupero de contraseña")
        }
        setIsLoading(false);
    }

    return(
        <Container>
            <Card className="m-4">
                <Card.Body >
                    <h2 className ="text-center mb-4">Reestablecer Contraseña</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    {message && <Alert variant="success"> {message} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button disabled= {isLoading} className='w-100 mt-4' type ='submit'> Reestablecer Contraseña </Button>
                    </Form>
                    <Button disabled= {isLoading} className='w-100 mt-4' type ='submit' onClick={()=>navigate('/login')}>
                        Iniciar Sesión
                    </Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Si no tenés cuenta, registrate <Link to='/singup'>aquí </Link>.
            </div>
        </Container>
        )

};

export default ForgotPassword;