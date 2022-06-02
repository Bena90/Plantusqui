import './counter.scss';
import { Button } from 'react-bootstrap';

const Counter = ({suma, resta, counter}) => {
    return(
        <div className="counterStyle">       
            <Button variant="success" size="sm" onClick = {resta}> - </Button>
            <p className="counter">{counter}</p>
            <Button variant="success" size="sm" onClick = {suma}> + </Button>
        </div>
    );
};

export default Counter;