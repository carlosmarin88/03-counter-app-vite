import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

// yarn dev for run project
ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        {/*<HelloWorldApp/>*/}
        <FirstApp title="Hola, soy Goku"/>
    </React.StrictMode>
);