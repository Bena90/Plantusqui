import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from "../firebase";
const ContactPage = () => {
    const { currentUser } = useAuth ()
    const [ user, setUser  ] = useState ("")
    const [ comment, setComment ] = useState ("")
    const [ send , setSend ] = useState (false)
    
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
    return (
        <Container>
            <div className="mb-4 contactStyle">
                <h2>Contactate con nosotros: </h2>
                <div className="textContainer mb-4">
                    <Row>
                        <div className="col-2"></div>
                        <div className="col-4">
                            <h4>Email</h4>
                            <p>Podes escribirnos a nuestro email:</p>
                            <p>loremiepsum@gmail.com</p>
                        </div>
                        <div className="col-4">
                            <h4>Ubicación</h4>
                            <p>O visitarnos en nuestro local</p>
                            <p>LorenIepsum 1234, Buenos Aires.</p>
                        </div>
                        <div className="col-2"></div>
                    </Row>
                </div>
                <hr />
                <div className="formContainer">
                    <h5 className="mt-1 mb-3">Completá el formulario y nos pondremos en contacto.</h5>
                    <form className=" pt-4" onSubmit={handleSubmit}>
                        <label htmlFor="nombre"/>
                        <input
                            className="form-control mb-2"
                            type="email"
                            placeholder="Email"
                            name="email" id='email'
                            value= {user}
                            required
                            onChange = {(e) => setUser(e.target.value)}
                            />
                        <label htmlFor="comentario"> Comentario: </label>
                        <textarea
                            className="comment form-control my-2"
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
                                    Comentario enviado correctamente! En breve nos pondremos en contacto.
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Container>
    )
}
export default ContactPage;