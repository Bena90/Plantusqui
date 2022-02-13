import './pages.scss'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getFirestore } from '../firebase'
import { useParams } from 'react-router-dom'

export const CheckOut = () =>{

    const {orderId} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() =>{
        const db = getFirestore();
        db.collection('orders').doc(orderId).get()
            .then((response) => {
                setOrder(response.data())
                
            })
            .finally(()=> console.log ('Cargado'))
    }, [])
    console.log(order)
    return(
        <Container>
            <div>
                <h1> Gracias por tu compra! </h1> 
                <p>{orderId}</p>
                </div>



        </Container>
    )


}