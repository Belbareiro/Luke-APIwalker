import React from 'react';
import obi_wan from '../image/obi-wan.jpg';
import '../ErrorMessage/ErrorMessage.css'

const ErrorMessage = () => {
    return (
        <div>
            <h2>These are not the droids you're looking for.</h2>
            <img src={obi_wan} alt="Obi-Wan Kenobi" />
        </div>
    );
};

export default ErrorMessage;