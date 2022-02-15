import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './pages.scss';
import photo from '../assets/article1.jpg'
import { useNavigate } from 'react-router-dom';

const Article1 = () =>{
    const navigate = useNavigate();
    return(
        <Container className="articleContainer mb-4">
            <h2>¿Cuáles son los mejores fertilizantes para plantas?</h2>
            <p className='introStyle'>
                El fertilizante es uno de los elementos fundamentales para el buen desarrollo
                de las plantas. Como seres vivos, las plantas también necesitan una buena
                dosis de nutrientes, además del sol y del riego. Por ello, seleccionar el
                mejor fertilizante para ellas es básico para poder enriquecerlas y fomentar
                su crecimiento fuerte y saludable.
            </p>
            <div className="imgArticle">
                <div className='imgContainer'>
                    <img className="w-100 mb-4" src={photo} alt="articlePhoto" />
                </div>
            </div>
            <h3>¿Qué son los fertilizantes?</h3>
            <p className="textArticle">
                Los fertilizantes, comúnmente conocidos como abono, son sustancias que
                contienen los nutrientes necesarios para el desarrollo y crecimiento de
                las plantas. Gracias al abono, tu cultivo aumentará la producción mientras
                evitas un déficit de nutrientes y mejoras la salubridad de las plantas.
                El uso de fertilizante debe darse normalmente en primavera, época ideal
                para abonar las plantas porque es cuando más suelen crecer. No obstante,
                debes tener en cuenta que no puedes excederte en la cantidad de fertilizante,
                sea cual sea la planta, ya que el abono debe administrarse de manera puntual y
                siguiendo la instrucción de cada producto. En caso contrario, podrías perjudicar
                la salud de la planta o, incluso, quemarla.
            </p>
            <h3>¿Cuáles son los mejores fertilizantes para plantas? Tipos: </h3>
            <p className="textArticle">
                Para saber cuáles son los mejores fertilizantes para plantas conviene
                centrarse en el tipo de planta o cultivo con el que se trabaja. Así, para
                dar con el mejor para tu cultivo, debes conocer los tipos de abono que hay
                y sus diferencias principales. Existen numerosos y variados fertilizantes
                en el mercado que se adecuan a unas u otras plantas, dependiendo de sus
                características o de las circunstancias que envuelven al vegetal en un
                momento determinado. Y aunque cada producto cuenta con sus propiedades, los
                fertilizantes se engloban en dos grandes grupos: abonos orgánicos y abonos
                minerales.
            </p>
            <h4>Fertilizantes orgánicos</h4>
            <p className="textArticle">
                Son aquellos que cuentan con una procedencia natural, es decir, están elaborados
                a partir de productos orgánicos y, por ende, son los menos contaminantes y los
                más respetuosos con el medioambiente. Se caracterizan por enriquecer el suelo,
                aunque suelen ser bajos en nutrientes, por lo que se debe usar una mayor cantidad
                o usarlo como complemento de otros abonos más potentes, como los minerales.
            </p>
            <p className="textArticle">
                Uno de los más usados es el compost orgánico, aunque también son comunes el
                estiércol, la turb, el humus o los extractos de algas, que cuentan con una gran
                cantidad de nutrientes y son perfectos para combatir plagas, problemas de aclimatación
                o sequía.
            </p>
            <h4>Fertilizantes minerales</h4>
            <p className="textArticle">
                Los abonos minerales son productos más extensos que los orgánicos, puesto que
                sus componentes químicos apuestan por una fórmula específica para cada tipo
                de planta, adecuándose más a ella. En dichas fórmulas están presentes minerales
                como el potasio, el fósforo o el nitrógeno, que podrán variar en cantidad, así
                como otras sustancias inorgánicas que se mezclan dando como resultado una formulación
                específica para cada tipo de planta.
            </p>
            <p className="textArticle">
                Este tipo de abono es perfecto para mantener la fertilidad del suelo y también
                para plantas que se ven sometidas a momentos de estrés. Son los abonos más versátiles,
                pues sus fórmulas específicas y sus diferentes formatos (líquido, granulado, soluble
                o en varitas) nos permiten adecuarnos mejor a nuestras plantas.
            </p>
            <h3> Fertilizantes para plantas según el uso:</h3>
            <p className="textArticle">
                Aunque todos los abonos se distinguen según su origen orgánico o mineral, también
                encontramos una distinción según el uso o la adecuación a cada planta, teniendo en
                cuenta sus necesidades específicas. Existen abonos universales, o bien abonos específicos
                o especiales para plantas verdes o para cultivos específicos, como el cannabis.
            </p>
            <p className="textArticle">
                El fertilizante universal cubre todas las necesidades básicas de las plantas, ya sean
                de interior o de exterior. Su fórmula es balanceada y destaca su contenido en nitrógeno.
                Este tipo de abono ayuda a fortalecer y dar más vigor a nuestras plantas, por lo que es
                la opción perfecta para revertir la carencia nutricional de cualquier cultivo, pero lo
                hace de forma genérica y hay plantas que pueden tener necesidades específicas. Además,
                este fertilizante se puede encontrar en formato líquido o granulado
            </p>
            <hr />
            <Button variant='success' className="mt-2" onClick={()=>navigate('/')}>Volver</Button>
        </Container>
    )
}
export default Article1;