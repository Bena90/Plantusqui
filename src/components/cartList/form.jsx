import { useContext, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"
import './cartList.scss';
import { getFirestore } from "../../firebase";
import 'firebase/firestore';
import firebase from 'firebase';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const UserForm = () => {
    const { cart, getTotal, setCart, setNavCounter } = useContext(CartContext);
    const { currentUser } = useAuth ();
    const [ user, setUser  ] = useState ("");
    const [ phone, setPhone ] = useState ("");
    const [ email, setEmail ] = useState ("");

    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault ();
        const newOrder = {
            buyer:{
                id: currentUser.uid,
                user,
                phone,
                email,
            }, 
            item: cart, 
            total: getTotal (cart),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        const db = getFirestore();
        db.collection('orders')
            .add(newOrder)
            .then((response) => {
                navigate(`/checkout/${response.id}`)
            })
            .catch((err) => console.log("Hubo un error", err))
            .finally(() =>{
                setCart([])
                setNavCounter (0)
            });
    };
    return(
            <Container className="formContainer">
                { (currentUser !== null) ? (
                <div>
                    <h2>Para finalizar, completa tus datos: </h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="formCart d-flex flex-column" >
                        <label htmlFor="user"/>
                        <input className="formField" 
                            type="text"
                            id="user"
                            name="user"
                            placeholder="Escriba su nombre"
                            value = {user}
                            onChange = {(e) => setUser(e.target.value)}
                            required
                        />
                        <label htmlFor="phone"/>
                        <input className="formField" 
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Escriba su teléfono"
                            value = {phone}
                            required
                            onChange = {(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="email"/>
                        <input className="formField" 
                            type="email"
                            id="email"
                            name="email"
                            placeholder={currentUser.email}
                            value = {email}
                            required
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <hr />
                        <h3> Total: $ {getTotal(cart)}</h3>
                        <hr />
                        <input className="buttonForm" type="submit" value="Finalizar Compra" />
                    </form>
                </div>
                ) : (
                <div>
                    <h2>No iniciaste sesión!</h2>
                    <p>Para continuar con tu compra, por favor inicia sesión</p>
                    <Button variant="success" onClick={()=>{navigate('/login')}}> Iniciar Sesión </Button>
                </div>
                )}
            </Container>
    )
}

