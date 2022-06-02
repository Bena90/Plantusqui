import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './cartList.scss';
import emptyCart from '../../assets/preview.png'
import useMap from '../../hook/useMap';

const CartList = () =>{
    const { cartRender, cart } = useMap ();

    if (cart.length === 0){
        return (
            <Container>
                <div className="emptyCart">
                <p> Oops! El carrito está vacío!</p>
                    <div className="emptyCartImg">
                        <img src={emptyCart} alt="Empty Cart" />
                    </div>
                    <p> 
                        Ingresá <Link className="navLink" to="/products">aquí</Link> para ver las plantus. 🌱
                    </p>
                </div>
            </Container>
        )
    }else{
        return(
                <div className="cartListContainer">
                    {cartRender ()}
                </div>
        )
    };
};
export default CartList;
