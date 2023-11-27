import './index.css';
import '@radix-ui/themes/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Images from './images';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <Theme radius="large" scaling="95%" appearance='dark' panelBackground='solid'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="images" element={<Images />}/>
          </Routes>
        </BrowserRouter>
      </Theme>
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
