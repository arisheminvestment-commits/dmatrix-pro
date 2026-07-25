import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'; // Essential import restored
import { AuthWrapper } from './app/AuthWrapper';
import './app/app-root.scss';

// Perform essential initialization steps before rendering.
// Without this global MobX configuration block, your app reliance on MobX state
// for component visibility (tabs) will cause chaotic re-renders and the UI will severely overlap.
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
