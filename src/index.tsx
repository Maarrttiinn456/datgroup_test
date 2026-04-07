import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { FavJokesProvider } from './contexts/FavJokesContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FavJokesProvider>
                <App />
            </FavJokesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement,
);
