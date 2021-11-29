import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Error = ({ msj }) => {



    return (

        <Fragment>
            <p className="my-3 p-4 text-center-white alert alert-primary">{msj}</p>
        </Fragment>

    );

};

Error.propTypes = {
    msj: PropTypes.string.isRequired
}

export default Error;