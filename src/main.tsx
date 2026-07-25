import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from 'mobx';
import { AuthWrapper } from './app/AuthWrapper';
import { initI18n } from './components/shared/i18n/init-i18n';
import { performVersionCheck } from './components/shared/utils/version-check';
import {
    applyBrandFontFromConfig,
    applyBrandStyleFromConfig,
    applyDocumentTitle,
    applyFavicon,
} from './components/shared/utils/branding';
import './app/app-root.scss';

// Perform initialization steps before rendering
configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});

initI18n();
performVersionCheck();
applyDocumentTitle();
applyFavicon();
applyBrandStyleFromConfig();
applyBrandFontFromConfig();

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <AuthWrapper />
        </React.StrictMode>
    );
}
