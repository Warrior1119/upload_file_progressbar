import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Components
import Upload from './components/upload';

function App() {
  return (
    <div className="container">
      <Upload />
    </div>
  );
}

export default App;
