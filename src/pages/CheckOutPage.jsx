import './pages.scss'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getFirestore } from '../firebase'
import { useNavigate, useParams } from 'react-router-dom'
import checkImg from '../assets/checkOut.jpg'

export const CheckOut = () =>{
    const [ isLoading, setIsLoading ] = useState (false)
    const navigate = useNavigate();
    const {orderId} = useParams();
    const [order, setOrder] = useState({});
    const [ item , setItem ] = useState([])

    useEffect(() =>{
        const db = getFirestore();
        setIsLoading (true)
        db.collection('orders').doc(orderId).get()
            .then((response) => {
                setOrder(response.data())
                setItem(response.data().item)
            })
            .finally(()=>{
                console.log(item) 
                setIsLoading (false)
            })
    }, [])

    return(
        <Container className="d-flex flex-column align-items-center">
            {isLoading ? (
                <Button className="m-4" variant="success" disabled>
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
                <div>
                    <h1> Gracias por tu compra! </h1> 
                    <div className="checkOutContainer">
                            <h3>Estos son los detalles de tu compra:</h3>
                            <br />
                            <p><strong>Id de tu compra: </strong>{orderId}</p>
                            {item.map((e) => (
                                <div key={e.item.id} className="order-item">
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                    <p className="me-2">
                                        <strong>Item: </strong>{`${e. item.name}`}
                                    </p>
                                    <p className="me-2">
                                        <strong>Quantity: </strong>{`${e.quantity}`}
                                    </p>
                                    <p className="me-2">
                                        <strong>Total: </strong>{`$${e.item.price*e.quantity}`}
                                    </p>
                                    </div>
                                </div>
                                ))}
                                <hr />
                            <h4 className="text-center"><strong> Total: </strong> ${order.total}</h4>
                    </div>
                    <Button variant="success"  className="mt-4" onClick={()=>navigate('/')}>
                        Volver al Home
                    </Button>
                </div>
            )}
        </Container>
    )
    
}