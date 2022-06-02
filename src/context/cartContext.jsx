import { createContext, useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';
import { getFirestore } from "../firebase";

export const CartContext = createContext ({}) ; 
CartContext.displayName = 'ProductsCart'

export const CartProvider = ({children}) => {

  /* ------- Counter ------- */
  const [counter , setCounter] = useState (0);
  const [navCounter , setNavCounter] = useState (0);

  /*Function counter*/ 
  const suma = () => setCounter ((prevCounter) => prevCounter + 1)
  const resta = () => {
  if(counter > 0){
      setCounter ((prevCounter) => prevCounter - 1);
  }};


  /* ------- Cart ------- */
    const [cart, setCart] = useState ([]);
    const addItem = (item, quantity) => {
      const newItem = {item, quantity}
      let findId = cart.findIndex(element => element.item.id === item.id)
      if (findId < 0 && quantity !== 0){
        setCart((prevState) => [...prevState, newItem])
        setNavCounter((prev) => prev + parseInt(newItem.quantity))
        setCounter (0)
      }
      console.log (navCounter)
    };
    const clear = (e) => {
      e.preventDefault()
      setCart ([])
      setCounter (0);
      setNavCounter (0);
    };

    const deleteProd = (id) => {
      let findId = cart.findIndex(element => element.item.id === id)
      setNavCounter ((prev) => (prev - cart[findId].quantity))    
      setCart ((prev) => prev.filter ((element) => element.item.id !== id)  );
    };

    const handleQuantityLess = (id) => {
      const newCart = [...cart]
      newCart.map ( (item) => {
        if (item.quantity >0 )
        {item.item.id === id && (item.quantity -= 1)}
        
        return newCart
      })
      setCart(newCart);
      setNavCounter((prev)=> (prev - 1))
    }

    const handleQuantityPlus = (id) => {
      const newCart = [...cart]
      newCart.map ( (item) => {
        item.item.id === id && (item.quantity += 1)
        return newCart
      })
      setCart(newCart);
      setNavCounter((prev)=> (prev + 1))
    }

    const getTotal = (cart) => {
      let total = 0;
      cart.forEach((prod) => {
        total += prod.item.price * prod.quantity
      });
      return total;
    };

  /* ------- Product ------- */
    const [productC, setProducts] = useState ({});
    const [isLoading, setIsLoading] = useState (false);  
    const [error, setError] = useState (null);

    useEffect(()=> {
      setIsLoading (true);
      const db = getFirestore ();
      const productsCollection = db.collection ('products');
      productsCollection.get()
          .then((response) =>{
              if(response.empty) console.log('Vacío')
              setProducts(response.docs.map((doc) => ( {...doc.data(), id: doc.id } )));
          })
          .catch((err) => setError (err))
          .finally (() => setIsLoading (false))
   }, [])
if(isLoading){
  return (
    <div className='spinnerContainer'>
        <Button variant="success" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Cargando...
      </Button>
    </div>
  )
}else if (error){
  return <p>Ha habido un error {error.message}</p>
}else{
  return (

      <CartContext.Provider value={{productC, cart, navCounter, setCart, addItem, suma, resta, clear, counter, setCounter, deleteProd, handleQuantityPlus, handleQuantityLess, getTotal}}>
         {children}
      </CartContext.Provider>
      );
  };
};