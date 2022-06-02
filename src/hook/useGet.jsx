import { useState, useEffect } from 'react';
import { getFirestore } from '../firebase/index';

const useGet = (id = null) => {

    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState (false);
    const [error, setError] = useState (null);
    const productSelect = id && true
    useEffect(()=>{
        setIsLoading (true);
        const db = getFirestore ();
        const productsCollection = productSelect ? db.collection ('products').doc(id)
            : db.collection('products');
        productsCollection.get()
            .then((response) =>{
                if(response.empty) console.log('El producto no existe')
                productSelect ? setProducts({...response.data(), id: response.id}) :
                setProducts(response.docs.map((doc) => ( {...doc.data(), id: doc.id } )));
            })
            .catch((err) => setError (err))
            .finally (() => setIsLoading (false))
    }, [])

    return {products, isLoading, error}    
}

export default useGet;