import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../cartItem/cartItem';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './cartList.scss';
import emptyCart from '../../assets/preview.png'

const CartList = () =>{
    const { cart, deleteProd } = useContext(CartContext);




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
                    {cart.map ((product) => ( <CartItem key={product.item.id} product={product} remove={deleteProd}/>) )}
                </div>
    )};
};
export default CartList;
