import React from 'react';
import './style.css';


function LoadingProvider(props) {
    return (
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
}

export default LoadingProvider;