import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TourProvider } from '@reactour/tour';
import steps from './steps';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <TourProvider steps={steps}> 
            <App />
        </TourProvider>
    </React.StrictMode>
);
