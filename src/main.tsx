import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

console.log("Auth0 Domain:", domain);
console.log("Auth0 Client ID:", clientId);
console.log("Auth0 Audience:", audience);

if (!domain || !clientId || !audience) {
    console.error("Auth0 environment variables are missing!");
}

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