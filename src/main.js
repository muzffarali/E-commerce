import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from "react-router-dom"
import { AppProvider } from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>

);

