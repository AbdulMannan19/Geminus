import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import authConfig from './auth_config.json';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true}
    useRefreshTokensFallback={false}
  >
    <App />
  </Auth0Provider>
);