import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

window.addEventListener('load', () => {
  const container = document.getElementById('react_root');
  const root = createRoot(container);
  root.render(<App/>);
});
