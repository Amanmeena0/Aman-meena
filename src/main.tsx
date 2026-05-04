import {StrictMode} from 'react';
// @ts-ignore - react-dom/client types may be unavailable in this setup
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// @ts-ignore - CSS side-effect import is resolved by the bundler
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
