import { Container } from "react-bootstrap";
import { getFirestore } from "../firebase";

const handleSubmit = (e) => {
    e.preventDefault ()
        console.log({
            [e.target[0].name] : e.target[0].value,
            [e.target[1].name] : e.target[1].value,
        });
}



const ContactPage = () => {

//   Carga de productos ---------*   
//    const db = getFirestore()
//    const collection = db.collection ('products')
//    const agregarDatos = () => {
//        PRODUCTS.forEach( (product) => {
//            collection
//            .add(product)
//            .then((response) => console.log ('producto agregado:', response.id))
//            .catch((err) => console.log ('Se rompio', err));
//        });
//    };

    return (

//        <button onClick={agregarDatos}> Agregar a Firestore</button>

        <Container>
            <h1>Contactate con nosotros: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" name="nombre" id='nombre'/>

                <label htmlFor="apellido"> Apellido </label>
                <input type="text" name='apellido' id='apellido'/>
                
                <input type="submit" value="Enviar" />
            </form>
        </Container>
    )
}

export default ContactPage;