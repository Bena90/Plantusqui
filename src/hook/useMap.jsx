import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from '../components/cartItem/cartItem';

const useMap = () => {
    const {cart, deleteProd} = useContext(CartContext);
    
    const cartRender = () => {
        return(
            cart.map ((item) => ( <CartItem key={item.item.id} product={item} remove={deleteProd}/>))
        )   
    }
    
    return { cartRender, cart }
}

export default useMap;