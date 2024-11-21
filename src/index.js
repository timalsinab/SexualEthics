import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EducationalHub from './App'; // Ensure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <EducationalHub />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your HTML has an element with id="root"
);
