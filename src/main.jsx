import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';
import { CounterApp } from './CounterApp';

// yarn dev for run project
ReactDOM.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        {/*<HelloWorldApp/>*/}
        <FirstApp title="Hola, soy vegeta"/>
        {/*<CounterApp value={2}/>*/}
        {/*<CounterApp value={0}/>*/}
    </React.StrictMode>
);