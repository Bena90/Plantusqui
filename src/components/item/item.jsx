import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './item.scss';


const Item = ({ product }) => {
    const navigate = useNavigate();
    return (   
            <div className="itemBox">
                <div className="itemImg">
                    <img src={product.img} alt="foto" />
                </div>
                <div className="itemDetail">
                    <hr/>
                    <p>Nombre: {product.name}</p>
                    <p>Descripción: {product.description}</p>
                    <p ><strong>Precio: $ {product.price}</strong></p>
                    <Button className="itemButton" size="sm" variant="success" onClick={() => navigate(`/products/${product.id}`)}>Detalle</Button>
                </div>
            </div>
            );
};

export default Item;