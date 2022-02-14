import React, { useRef, useState } from 'react';
import { Form, Card, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './signUp.scss';


const Login = () => {
    const navigate = useNavigate();
    const { login, signInWithGoogle } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [ error, setError] = useState('');
    const [ isLoading, setIsLoading ] = useState (false)
    
    const handleSubmit = async (e) => {
        e.preventDefault ();

        try {
            setError ('')
            setIsLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/');
        } catch {
            setError ("Email y/o contraseña incorrectos.")
        }
        setIsLoading(false);
    }

    const handleGoogleAuth = (e) =>{

        e.preventDefault();
        signInWithGoogle()
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>setError(err))
    }

    return(
        <Container>
            <Card className="m-4">
                <Card.Body >
                    <h1 className =" cardTitle text-center mb-2">Login</h1>
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
                        <Button disabled= {isLoading} variant="success" className='w-100 mt-4' type ='submit'> Ingresar </Button>
                    </Form>
                    <hr />
                        <button type="button" className="login-with-google-btn w-100" disabled={isLoading} onClick={handleGoogleAuth}>
                            Sign in with Google
                        </button>
                    <hr />
                    <Button aria-disabled= {isLoading} variant="success" className='w-100 mt-1' type ='submit' onClick={()=>navigate('/forgot')}>
                        Olvidaste la contraseña?
                    </Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Si no tenés cuenta, registrate <Link to='/signup'>aquí </Link>
            </div>
        </Container>
        )

};

export default Login;