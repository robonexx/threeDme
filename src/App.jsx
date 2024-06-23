import React, { useEffect } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/landing';

function App() {
  const location = useLocation();

  useEffect(() => {
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore && location.pathname !== '/landing') {
      // If not visited before and not on landing page, redirect to landing
      localStorage.setItem('visitedBefore', 'true');
      window.location.href = '/landing'; // Redirect using window.location.href
    }
  }, [location]);

  return (
    <main className=''>
      {/* Conditional rendering based on visitedBefore */}
      {localStorage.getItem('visitedBefore') ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Landing /> // Render Landing page if not visited before
      )}
    </main>
  );
}

export default App;
