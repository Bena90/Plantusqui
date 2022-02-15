import React, { useRef, useState } from 'react';
import { Form, Card, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './signUp.scss';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [ error, setError] = useState('');
    const [ isLoading, setIsLoading ] = useState (false);    

    const handleSubmit = async (e) =>{
        e.preventDefault ();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Las contraseñas no son iguales!')
        }
        try {
            setError ('')
            setIsLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError ("No se ha podido crear la cuenta")
        } finally {
            navigate("/login")
            setIsLoading(false);
        }
    }
    return(
        <Container>
            <Card className="m-4">
                <Card.Body >
                    <h2 className ="text-center mb-4">Registrate</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                        </Form.Group>
                            <Button
                                disabled={isLoading}
                                variant ="success"
                                className='w-100 mt-4'
                                type ='submit'> Enviar
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Ya tienes cuenta? Ingresá <Link to='/login'>aquí</Link>.
            </div>
        </Container>
        )
};

export default Signup;