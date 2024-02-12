import './index.css';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className='ldsContainer'>
            <div className='ldsSpinner' data-testid='loading-spinner'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingPage;