import React, { useRef, useState } from 'react';
import { Form, Card, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './signUp.scss';

const UpdateProfile = () => {
    const { updateEmail, updatePassword, currentUser } = useAuth();
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [ error, setError] = useState('');
    const [ isLoading, setIsLoading ] = useState (false)
    
    const handleSubmit = (e) =>{
        e.preventDefault ();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Las contraseñas no son iguales!')
        }
        setIsLoading(true)
        setError ('')

        const promises = []

        if(emailRef.current.value !== currentUser.email){
            promises.push (updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push (updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            navigate('/')
        })
        .catch(()=>{
            setError('Error al actualizar datos.')
        })
        .finally(()=>{
            setIsLoading(false);
        })

    }

    return(
        <Container>
            <Card className="m-4">
                <Card.Body >
                    <h2 className ="text-center mb-4">Modificar Datos</h2>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder="Dejar en blanco si no desea modificar"/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder="Dejar en blanco si no desea modificar"/>
                        </Form.Group>
                        <Button disabled= {isLoading} variant="success" className='w-100 mt-4' type ='submit' onClick={handleSubmit}> Actualizar </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Ya tienes cuenta? Ingresá <Link to='/'>Cancel</Link>.
            </div>
        </Container>
        )

};

export default UpdateProfile;