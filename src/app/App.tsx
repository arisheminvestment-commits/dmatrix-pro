// src/app/App.tsx
import React from 'react';
import { StoreProvider } from '@/hooks/useStore';
import { AuthWrapper } from './AuthWrapper';
import './app.scss';

export const App = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <AuthWrapper />
            </StoreProvider>
        </React.StrictMode>
    );
};

export default App;
