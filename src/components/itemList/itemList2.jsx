import { useEffect, useState } from 'react';
import './itemList.scss';
import Item from "../item/item";
import { Button, Spinner } from 'react-bootstrap';


function ItemList2 () {

    const [products, setProducts] = useState ([]);

    const [isLoading, setIsLoading] = useState (false);

    const [error, setError] = useState (null);

    const urlProducts = 'http://localhost:3001/productos';



    useEffect(()=>{
        
        setIsLoading (true);

        fetch (urlProducts)
            .then((response) => response.json())
            .then((dataProduct) => setProducts(dataProduct))
            .catch((err) => setError (err))
            .finally (() => setIsLoading(false));
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
            <div className='itemsBox'>
                {products.map((product) => (<Item key={product.id} product={product} />))}
            </div>
        )
    }
}

export default ItemList2