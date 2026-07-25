import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthWrapper from './app/AuthWrapper';
import './app/app-root.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <AuthWrapper />
        </React.StrictMode>
    );
}
