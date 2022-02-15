import { useEffect, useState} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemDetail from '../itemDetail/itemDetail';
import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
    
    const {productId} = useParams()
    const [product, setProduct] = useState ([])
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError] = useState (null)

    useEffect(()=> {
        setIsLoading (true);
        const db = getFirestore()
        const productsCollection = db.collection('products')
        const productSelect = productsCollection.doc(productId)
        productSelect.get()
            .then((response) => {
                if(!response.exists) {console.log('El producto no existe')};
                setProduct({...response.data(), id: response.id});
            })
            .catch((err) => setError (err))
            .finally (() => setIsLoading (false))
    }, [productId])

    if (isLoading || !product) {
        return (
            <div className='spinnerContainer'>
                <Button variant="success" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                    Cargando...
                </Button>
            </div>
        )
    }else if (error){
        return <p>Ha habido un error {error.message}</p>
    }else{
        return (
            <div className = "  ">
                <ItemDetail product={product}/>
                <hr />
            </div>
        )
    };
}

export default ItemDetailContainer;