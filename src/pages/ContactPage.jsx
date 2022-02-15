import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from "../firebase";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const { currentUser } = useAuth ()
    const [ user, setUser  ] = useState ("")
    const [ comment, setComment ] = useState ("")
    const [ send , setSend ] = useState (false)
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault ()       
        const newComment = {
            user:{
                id: currentUser.uid,
            }, 
            name: user, 
            comment: comment,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const db = getFirestore();
        db.collection('comments')
            .add(newComment)
            .then((response) => {
                console.log('Formulario enviado', response)
            })
            .catch((err) => console.log("Hubo un error", err))
            .finally(()=>{
                setSend (true)
            });
    }
    console.log(currentUser)
    return (
        <Container>
            { (currentUser !== null) ?(
                <div className="mb-4 ">
                    <h1>Contactate con nosotros: </h1>
                    <form className="contactStyle pt-4" onSubmit={handleSubmit}>
                        <label htmlFor="nombre"/>
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="nombre" id='nombre'
                            value= {user}
                            required
                            onChange = {(e) => setUser(e.target.value)}
                        />
                        <label htmlFor="comentario"> Comentario: </label>
                        <input
                            className="comment"
                            type="text"
                            name='comentario'
                            id='comentario'
                            value={comment}
                            required
                            onChange = {(e) => setComment(e.target.value)}
                        />
                        
                        {(send === false) ? (<input className="btn btn-success m-3" type="submit" value="Enviar" />
                        ):(
                            <div className="d-flex flex-column align-items-center p-2">
                                <input className="btn btn-success m-3" type="submit" value="Enviar" disabled/>
                                <div class="alert alert-success" role="alert">
                                    Comentario enviado correctamente! En breves nos pondremos en contacto.
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            ) : (
                <div className="contactStyle p-4 mt-4">
                    <h2>No estás logueado. Primero inicia sesión:</h2>
                    <Button variant ="success" onClick={()=>navigate('/login')}> Login </Button>
                </div>
            )
        }
        </Container>
    )
}

export default ContactPage;