
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          KnownVisitor Waitlist
        </h1>
        <p className="text-xl text-gray-600">
          Testing Production Build
        </p>
        <p className="text-sm text-blue-600 mt-2">
          If you can see this, the deployment is working!
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Time: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default App;