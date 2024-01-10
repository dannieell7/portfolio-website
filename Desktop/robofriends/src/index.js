import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './App';
import {createRoot} from 'react-dom/client';

// createRoot(<App /> ,document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();