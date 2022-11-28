import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);