import { createContext, useContext, useState } from "react";

export const CartContext = createContext ({}) ; 
CartContext.displayName = 'ProductsCart'


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState ([])

    function addItem (item, quantity) {

    const newItem = {item,quantity}

    setCart( (prevState) => [...prevState, newItem] )

    console.log(cart)
    
  }

      return(
      <CartContext.Provider value={cart, addItem}>
         {children}
      </CartContext.Provider>
      );
};

//export const useCart = () => useContext(CartContext);









/*export const UserContext = createContext ({});
UserContext.displayName = 'UserContext'

const UserProvider = ({children}) => {
    const USER_DATA = {
        name: 'Laura',
        email: 'laura@gmail.com',
        img: 'https://picsum.photos/200'
      }

    return (
      <UserContext.Provider value={USER_DATA}> {children}  </UserContext.Provider>
    )
}
export default UserProvider */