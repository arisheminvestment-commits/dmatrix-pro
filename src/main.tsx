import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx'; // Essential import
import { AuthWrapper } from './app/AuthWrapper';
import './app/app-root.scss';

// Perform essential initialization steps before rendering.
// Without this global MobX configuration block, the application
// will experience severe re-rendering issues and the UI will overlap.
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
