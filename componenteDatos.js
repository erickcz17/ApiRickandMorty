import React from 'react';

const Datos = (props) => {
    return(
        <div>
            <p>Hola tu nombre es: {props.nombre}</p>
            <p>La materia que estamos viendo es: {props.materia}</p>
        </div>
    );
};

export default Datos;