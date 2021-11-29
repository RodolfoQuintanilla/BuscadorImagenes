import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({ guardarBusqueda }) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);


    const buscarImagenes = (e) => {
        e.preventDefault();

        if (termino.trim() === '') {
            guardarError(true);
            return;
        }

        guardarBusqueda(termino);
    };

    return (

        <Fragment>
            <form
                onSubmit={buscarImagenes}
            >
                <div className="row">
                    <div className="form-group col-md-8">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Buscar Imagen, ejemplo; futbol o cafe"
                            onChange={e => guardarTermino(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type="submit"
                            className="btn btn-lg btn-danger btn-block"
                            value="Buscar"
                        />
                    </div>
                </div>
            </form>
            {error ? <Error msj="Termino de Busqueda Incorrecto" /> : null}
        </Fragment>

    );

};
Formulario.propTypes = {
    guardarBusqueda: PropTypes.string.isRequired
}

export default Formulario;