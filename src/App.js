import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from './components/AppBar/AppBar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [currentPage, setCurrentPage] = useState('home');

  // Inject global styles
  React.useEffect(() => {
    const styles = `
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .loading-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }

      .loading-text {
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div>Loading Geminus...</div>
      </div>
    );
  }

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <AppBar onNavigateToProfile={handleNavigateToProfile} onNavigateToHome={handleNavigateToHome} />
          {renderCurrentPage()}
        </>
      )}
    </div>
  );
}

export default App;