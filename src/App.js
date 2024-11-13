import React from 'react';
import './App.css'; // You can keep this for custom styles, or remove if unused.

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex justify-center items-center">
      <header className="App-header text-center bg-blue-600 text-white p-6 rounded-lg shadow-lg">
        <img src="/logo.svg" className="App-logo mx-auto mb-4" alt="logo" />
        <p className="text-xl font-semibold mb-4">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-blue-300 hover:text-blue-500 transition-colors"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
