# Geminus

A minimal OAuth authentication setup using Auth0 and React.

## Features

- Simple login/logout functionality
- User profile display
- Minimal dependencies
- No styling or extra components

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Update `src/auth_config.json` with your Auth0 credentials:
   ```json
   {
     "domain": "your-auth0-domain.auth0.com",
     "clientId": "your-client-id"
   }
   ```

3. Start the development server:
   ```
   npm start
   ```

## Dependencies

- `@auth0/auth0-react` - OAuth authentication
- `react` & `react-dom` - Core React
- `react-scripts` - Build tools