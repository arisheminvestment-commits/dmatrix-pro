// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'; // RESTORED essential MobX configure import
import { AuthWrapper } from './app/AuthWrapper';
import './app/app-root.scss';

// NEW: Global MobX configuration to manage application state changes.
// Without this block, relying on MobX state to switch between Applications (Tabs) 
// will cause chaotic non-rendering and component overlap errors.
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <AuthWrapper />
        </React.StrictMode>
    );
}
