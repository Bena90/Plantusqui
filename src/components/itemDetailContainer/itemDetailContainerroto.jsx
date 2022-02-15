import { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemDetail from '../itemDetail/itemDetail';
import './itemDetailContainer.scss';

const ItemDetailContainer = () => {

    const { addItem } = useContext(CartContext);
    const {productId} = useParams()
    const [product, setProducts] = useState ([])
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError] = useState (null)

        useEffect(()=> {
        setIsLoading (true);
        const urlProduct = `http://localhost:3001/productos/${productId}`

        fetch (urlProduct)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => setError (err))
            .finally (() => setIsLoading (false))
    }, [productId])
    if (isLoading || !product) {
        return (
            <Button variant="success" disabled>
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                Cargando Datos...
            </Button>
            );
    }else if (error){
        return <p>Ha habido un error {error.message}</p>
    }else{
        return (
            <div>
                <ItemDetail product={product}/>
                <div className="productDetailsPagesButton">
                    <Button variant="success" id="productId" onClick={()=>addItem(product)}> Comprar </Button>
                </div>
                <hr />
            </div>
        )
    };
}

export default ItemDetailContainer;