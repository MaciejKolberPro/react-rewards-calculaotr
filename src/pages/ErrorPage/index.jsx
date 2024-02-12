import './index.css';
import React from 'react';

const ErrorPage = ({
    error
}) => {
    return (
        <div className='errorContainer'>
            <h1>{error}</h1>
        </div>
    );
}

export default ErrorPage;