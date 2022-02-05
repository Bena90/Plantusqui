import { Container } from "react-bootstrap";

const handleSubmit = (e) => {
    e.preventDefault ()
        console.log({
            [e.target[0].name] : e.target[0].value,
            [e.target[1].name] : e.target[1].value,
        });
}

const ContactPage = () => {

    return (

        <Container>
            <h3>Contactanos llenando el siguiente formulario: </h3>
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