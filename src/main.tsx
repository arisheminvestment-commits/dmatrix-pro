// src/main.tsx - COMPLETE FIX
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'; // Essential MobX configure import.
import { StoreProvider } from './hooks/useStore'; // Import the missing context provider.
import RootStore from './stores/RootStore'; // Import the missing root store.
import { AuthWrapper } from './app/AuthWrapper';
import './app/app-root.scss';

// NEW: Initialization of the global MobX configuration,
// required for reactions and observations to work correctly in Turn 30+.
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});

// INITIALIZE THE MISSING STORE: Create the instance of the RootStore.
const store = new RootStore(); 

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            {/* THE MISSING FIX: Wrap the application in the StoreProvider, 
                passing the initialized store as the value. */}
            <StoreProvider value={store}>
                <AuthWrapper />
            </StoreProvider>
        </React.StrictMode>
    );
}
