import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../cartItem/cartItem';
import './cartList.scss';


const CartList = () =>{


    const { cart, deleteProd } = useContext(CartContext);

    return(
        <>
            <div >
                <h1>Carrito: </h1>
            </div>
            <div className="cartListContainer">
                {cart.map ((product) => ( <CartItem key={product.item.id} product={product} remove={deleteProd}/>) )}
            </div>
        </>
    );
};
export default CartList;
