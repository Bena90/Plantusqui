import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getFirestore } from '../../firebase';
import './orders.scss';
import { OrderItem } from './ordersItem';

const Orders = () =>{
    const [loading, setLoading] = useState(true);
    const [userOrders, setUserOrders] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const orders = db.collection('orders').orderBy('date', 'desc');
        orders
            .get()
            .then((res)=>{
                const newUserOrders = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                const filteredUserOrders = newUserOrders.filter(
                (order) => order.buyer.id === currentUser.uid
                );
                setUserOrders(filteredUserOrders);
            })
            .catch((err) => console.error(err))
            .finally(() => {
            setLoading(false);
            });
    }, []);

    return(
        <Container>
            {loading ? (
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
            ) : (
                <>
                {userOrders.length === 0 ? (
                    <div className="cartEmpty">
                        <h4 className="text-center">No tienes órdenes aún. Revisa nuestras plantus:</h4>
                        <Button variant="success" onClick={()=>navigate('/products')}> Ver Plantus </Button>
                    </div>
                ) : (
                    <div>
                    {userOrders.map((order) => (
                            <OrderItem key={order.id} {...order} />
                    ))}
                    </div>
                )}
                </>
            )}
        </Container>
    )
}

export default Orders;
