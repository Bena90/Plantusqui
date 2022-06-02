import Item from "../item/item";
import { Button, Spinner } from 'react-bootstrap';
import useProducts from '../../hook/useProducts';
import './itemList.scss';

function ItemList2 () {
    const { products, isLoading, error } = useProducts ()
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
            <div className='itemsBox'>
                {products.map((product) => (<Item key={product.id} product={product} />))}
            </div>
        )
    }
}
export default ItemList2;