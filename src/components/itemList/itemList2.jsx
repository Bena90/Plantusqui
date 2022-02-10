import { useEffect, useState } from 'react';
import './itemList.scss';
import Item from "../item/item";
import { Button, Spinner } from 'react-bootstrap';
import { getFirestore } from '../../firebase';




function ItemList2 () {
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState (false);
    const [error, setError] = useState (null);
    //const urlProducts = 'http://localhost:3001/productos';

    useEffect(()=>{
        setIsLoading (true);
        const db = getFirestore ();
        const productsCollection = db.collection ('products');
        productsCollection.get()
            .then((response) =>{
                if(response.empty) console.log('El producto no existe')
                setProducts(response.docs.map((doc) => ( {...doc.data(), id: doc.id } )));
            })
            .catch((err) => setError (err))
            .finally (() => setIsLoading (false))

// con Try
//        const getDataFromFirestore = async () => {
//            try{
//            const response = await productsCollection.get()     
//            if (response.empty) {
//                console.log('No hay productos')
//            };
//            setProducts(response.docs.map((doc) => ( {...doc.data(), id: doc.id } )));
//            }catch(err){
//                setError(err)
//            }finally{
//                setIsLoading(false)
//            }
//        };
//        getDataFromFirestore ();

        //Servidor local
        //fetch (urlProducts)
        //    .then((response) => response.json())
        //    .then((dataProduct) => setProducts(dataProduct))
        //    .catch((err) => setError (err))
        //    .finally (() => setIsLoading(false));
    }, [])

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