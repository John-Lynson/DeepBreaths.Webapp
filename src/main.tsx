import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

console.log("Auth0 Config:");
console.log("Domain:", import.meta.env.VITE_AUTH0_DOMAIN);
console.log("Client ID:", import.meta.env.VITE_AUTH0_CLIENT_ID);
console.log("Audience:", import.meta.env.VITE_AUTH0_AUDIENCE);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);