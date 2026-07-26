// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'; 
import { StoreProvider } from './hooks/useStore'; 
// MUST BE EXACTLY THIS:
import RootStore from './stores/root-store'; 
import { AuthWrapper } from './app/AuthWrapper';
import './app/app-root.scss';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});

const store = new RootStore(); 

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <StoreProvider value={store}>
                <AuthWrapper />
            </StoreProvider>
        </React.StrictMode>
    );
}
