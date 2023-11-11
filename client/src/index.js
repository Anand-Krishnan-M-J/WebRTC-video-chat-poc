import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './socketContext';
import App from './App'
import './styles.css'

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('root')
);
