import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useGet from '../../hook/useGet';
import ItemDetail from '../itemDetail/itemDetail';
import './itemDetailContainer.scss';

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const { products, isLoading, error } = useGet( productId )

    if (isLoading || !products) {
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
                <ItemDetail product={products}/>
                <hr />
            </div>
        )
    };
}

export default ItemDetailContainer;