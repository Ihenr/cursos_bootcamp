import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // Breve introcucción a useState
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29);

    // Metodo
    const birthday = () => {
        // Actualizar el State
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                    !HOLA {props.name} desde componete funcional!
                </h1>
                <h2>
                    Tu edad es de { age }
                </h2>
                <div>
                    <button onClick={birthday}>
                        cumplir años
                    </button>
                </div> 
        </div>
    );
};


GreetingF.propTypes = {
    name : PropTypes.string
};


export default GreetingF;
