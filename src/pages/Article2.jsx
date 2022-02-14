import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './pages.scss';
import photo from '../assets/article2.webp'
import process from '../assets/procesocompostaje.jpg'
import { useNavigate } from 'react-router-dom';


const Article2 = () =>{
    const navigate = useNavigate();
    return(

        <Container className="articleContainer mb-4">
            <h2>El compostaje</h2>
            <p className='introStyle'>
                El compostaje es un proceso de transformación natural de los residuos orgánicos
                (restos de comida que tiramos habitualmente a la basura)  para obtener compost,
                un abono natural que sirve para aportar nutrientes a la tierra.
            </p>
            <div className="imgArticle">
                <div className='imgContainer'>
                    <img className="w-100 mb-4" src={photo} alt="articlePhoto" />
                </div>
            </div>
            <h3>¿Qué es el compostaje?</h3>
            <p className="textArticle">
                El compostaje es la técnica de observar a la naturaleza en el proceso de la
                descomposición, que se produce cuando las plantas y restos orgánicos de los
                animales muertos se acumulan en el suelo y se descomponen gracias a los insectos
                y microorganismo para transformarse en nutrientes para las plantas. El hombre ha
                utilizado este proceso natural acelerándolo para su beneficio dando lugar al compostaje.
            </p>
            <p className="textArticle">
                Desde hace cientos de años, el hombre han usado el compost para mejorar la tierra.
                Hoy en día también es una manera de reducir los residuos urbanos que se añaden a los vertederos.
                Hay que tener en cuenta que la comida desperdiciada es un grave problema ambiental,
                estos residuos urbanos son muy perjudiciales para el medio ambiente, ya que causan un
                aumento en las emisiones de CO2 y juega un papel fundamental en el Calentamiento Global.
                De esta manera por cada 100 kilogramos de basura orgánica se obtienen 30 kilogramos de compost.
            </p>
            <div className="imgArticle">
                <div className='imgContainer'>
                    <img className="w-100 mb-4" src={process} alt="articlePhoto" />
                </div>
            </div>
            <h3>Beneficios del compost: </h3>
            <p className="textArticle">
                El compost o humus es el resultado final del proceso del compostaje, es un abono natural
                que no es tóxico y muy beneficioso para las plantas, ya que ayuda a que el suelo retenga
                la humedad, mejorando la capacidad de su jardín para cultivar plantas saludables y reducir
                el volumen de basura.
            </p>
            <p className="textArticle">
                El compostaje permite la continuidad del ciclo de vida, ya que alimenta a las especies
                vegetales, las que posteriormente serán el sustento de las variedades animales.
            </p>
            <p className="textArticle">
                Las ventajas para el medio ambiente son evidentes, ya que por ejemplo una bolsa de basura
                convencional incluye un 50% de materia orgánica, la cual podría ser reciclada para volver
                a la tierra como humus, facilitando el desarrollo de plantas y cultivos. Los números son
                claros: con 100 kilogramos de residuo orgánico es posible obtener 30 kilogramos de abono
                natural, muy apreciado por los jardineros que lo llaman el oro negro, y además gratuito.
            </p>
            <h3>¿Cómo realizar compost casero?</h3>
            <p className="textArticle">
                Para poder realizar el compostaje casero es necesario, en primer término ubicar el compostador
                en un lugar del jardín o en la terraza de un piso (vemicompostador o compostador urbano),
                resguardado de las inclemencias climatológicas, evitando que se humedezca o se reseque.
            </p>
            <p className="textArticle">
                A continuación voy a tratar de responder las dudas que tenemos todos los que queremos compostar y nos encontramos con dificultades:
            </p>

            <h4> ¿Se puede compostar en el piso? </h4>
            <p className="textArticle">
            Por su puesto que si, siempre que tengas un espacio aireado en la terraza resguardado de
            las incremencias metereológicas, evitando que le falte agua. Necesitarás una compostadora
            especial urbana, llamada también vermicompostadora.
            </p>
            <p className="textArticle">
            La única diferencia, a parte del tamaño entre una compostadora de jardín y un compostadora
            urbana o vermicompostadora es, que en este segundo caso, se necesita para acelerar el proceso
            la ayuda de una especie de lombriz denominada roja de California (Eisenia foetida).
            No te preocupes, estas lombrices son como las de toda la vida, inofensivas…
            </p>
            <h4> ¿Produce mal olor? </h4>
            <p className="textArticle">
                No, nunca debe oler mal, al contrario, un agradable olor a bosque húmedo. De todas maneras
                ten la precaución de remover les restos vegetales cada cierto tiempo para evitar una falta
                de oxígeno en algún rincón de la compostadora.
            </p>
            <h4> ¿Atrae insectos? </h4>
            <p className="textArticle">
                No, si se toman precauciones de enterrar la comida con restos de hojas secas, papel o
                cesped,etc.
            </p>
            <h4> ¿Cómo se si está listo el compost? </h4>
            <p className="textArticle">
                Su aspecto será de un color negro o marrón muy oscuro, textura esponjosa, se deshace en
                las manos. La apariencia es similar a la del café molido.
            </p>
            <h4> ¿Cuánto tarda la compostadora en producir el compost? </h4>
            <p className="textArticle">
                Dependiendo de la cantidad de restos que se pongan, el compost puede tardar 1 mes ó 3
                en hacerse.
            </p>
            <hr />
            <Button variant='success' className="mt-" onClick={()=>navigate('/')}>Volver</Button>
        </Container>

    )
}

export default Article2;