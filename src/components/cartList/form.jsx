import { useContext, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"
import "firebase/firestore";
import './cartList.scss';
import { getFirestore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const UserForm = () => {

    const { cart, getTotal, setCart } = useContext(CartContext);
    const { currentUser } = useAuth ()
    const [ user, setUser  ] = useState ("")
    const [ phone, setPhone ] = useState ("")
    const [ email, setEmail ] = useState ("")

    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault ();
        if(!user || !phone){
            console.log('llena el formulario gil')
            return
        }
        const newOrder = {
            buyer:{
                user,
                phone,
                email,
            }, 
            item: cart, 
            total: getTotal (cart),
        }
        
        const db = getFirestore();
        db.collection('orders')
            .add(newOrder)
            .then((response) => {
                console.log('compra realizada exitosamente', response.id)
                console.log(newOrder)
                navigate(`/checkout/${response.id}`)
            })
            .catch((err) => console.log("Hubo un error", err))
            .finally(() =>setCart([]))

    }
    return(
        <>
            <Container className="formContainer">
                { (currentUser !== null) ?(
                <div>
                    <h2>El resumen de tu compra es: </h2>
                    <h3> Total: $ {getTotal(cart)}</h3> 
                    <hr />
                    <input className="buttonForm" type="submit" value="Finalizar Compra" />
                
                    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column" }} >
                    <label htmlFor="name"></label>
                    <input className="formField" 
                        type="text"
                        id="user"
                        name="user"
                        placeholder="Escriba su nombre"
                        value = {user}
                        onChange = {(e) => setUser(e.target.value)}
                    />
                    <label htmlFor="phone"></label>
                    <input className="formField" 
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Escriba su teléfono"
                        value = {phone}
                        required
                        onChange = {(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="email"></label>
                    <input className="formField" 
                        type="email"
                        id="email"
                        name="email"
                        placeholder={currentUser.email}
                        value = {email}
                        requerid
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <h3> Total: $ {getTotal(cart)}</h3>
                    
                    <input className="buttonForm" type="submit" value="Finalizar Compra" />
                </form>
            </div>
                ) : (
                <div>
                    <h2>No iniciaste sesión!</h2>
                    <p>Para continuar con tu compra, por favor inicia sesión</p>
                    <Button variant="primary" onClick={()=>{navigate('/login')}}> Iniciar Sesión </Button>
                </div>
                )}
            </Container>
        
</>
    )


}

