import { createContext, useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';

export const CartContext = createContext ({}) ; 
CartContext.displayName = 'ProductsCart'

export const CartProvider = ({children}) => {


/* ------- Counter ------- */
const [counter , setCounter] = useState (0);

/*Function counter*/ 
const suma = () => {
setCounter ((prevCounter) => prevCounter + 1);

}
const resta = () => {
if(counter > 0){
    setCounter ((prevCounter) => prevCounter - 1);
};
};

/* ------- Cart ------- */
  const [cart, setCart] = useState ([]);

  const addItem = (item, quantity) => {
    const newItem = {item, quantity}

    setCart( (prevState) => [...prevState, newItem] )
    setCounter (0)
    console.log(newItem);
    console.log(cart)
    
  }
  const clear = (e) => {
    e.preventDefault()
    setCart ([])
    setCounter (0);
  }

  const deleteProd = (id) => {
    setCart ( (prev) => prev.filter ((element) => element.item.id !== id)  )
  };

/* ------- Product ------- */
  const [productC, setProducts] = useState ({});
  const [isLoading, setIsLoading] = useState (false);  
  const [error, setError] = useState (null);

  useEffect(()=> {
    
    setIsLoading (true);
    const urlProduct = `http://localhost:3001/productos/`

    fetch (urlProduct)
        .then((res) => res.json())
        .then((dataProduct) => setProducts(dataProduct))
        .catch((err) => setError (err))
        .finally (() => setIsLoading (false))
}, [])

if(isLoading){
  return (
      <Button variant="success" disabled>
          <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
          />
          Cargando Datos...
    </Button>
  )
}else if (error){
  return <p>Ha habido un error {error.message}</p>
}else{
  return (

      <CartContext.Provider value={{productC, cart, addItem, suma, resta, clear, counter, deleteProd}}>
         {children}
      </CartContext.Provider>
      );
  };
};




