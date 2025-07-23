
import React from "react";

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black', marginBottom: '1rem' }}>
          KnownVisitor Waitlist
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'gray' }}>
          Test Page - If you can see this, React is working!
        </p>
        <p style={{ fontSize: '1rem', color: 'blue', marginTop: '1rem' }}>
          Current time: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default App;