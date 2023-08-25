import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SisenseContextProvider } from '@sisense/sdk-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <SisenseContextProvider
        url="<https://stevetesting.sisensepoc.com>" // replace with the URL of your Sisense instance
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxZmIxNGUwYjU4NjMwMDJkM2JmMGUwIiwiYXBpU2VjcmV0IjoiZmI3YzlmM2QtMjBlNy01MzMzLTkyOWQtNzQwYzdhM2JkMDc1IiwiYWxsb3dlZFRlbmFudHMiOlsiNjIxZmE5ZDBiYTdkMzQwMDFhOGI5ZDAwIl0sInRlbmFudElkIjoiNjIxZmE5ZDBiYTdkMzQwMDFhOGI5ZDAwIn0.cP1-2k1HqILfTqt58RfOrCo_ds8efXfnN0wmxr55KbU" // replace with the API token of your user account
        defaultDataSource="Sample ECommerce"
    >
    <App />
    </SisenseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
