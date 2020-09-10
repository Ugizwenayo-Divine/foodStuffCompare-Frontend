import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
