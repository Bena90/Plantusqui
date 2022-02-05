import './itemDetail.scss';
import { Button, Container } from 'react-bootstrap';
import Counter from '../counter/counter';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {

    const { cart, addItem, counter , suma , resta } = useContext(CartContext);

    const handleClick = () => {
        addItem(product, counter)
    }

    return (
        <Container>
            <div className="detailContainer">
                <div className='imgDetail'>
                    <img src={product.img} alt="foto" /> 
                </div>
                <div className='textDetail'>
                    <h2>{product.name} </h2>
                    <h6>Descripción: {product.description}</h6>
                    <p className ="productDetails">{product.fullDetails}</p>
                    <p><strong>Precio: {product.price}</strong></p>
                    <hr/>
                    <Counter counter={counter} suma={suma} resta={resta}/>
                    <div className="buttonBuy">
                        <Button variant="success" onClick={handleClick}>Comprar</Button>
                    </div>

                </div>
            </div>
        </Container>
    );
};
export default ItemDetail;