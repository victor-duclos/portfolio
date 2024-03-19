import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './index.scss';

import Home from './pages/Home';
import Projets from './pages/Projets';
import Auth from './pages/Auth';
import Services from './pages/Services';
import Dashboard from './components/dashboard';
import Contacter from "./pages/Contacter"
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    <Router>
      <div className="content-conteneur">
      <Dashboard />
      
        
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<Projets />} />
        <Route path="/modifications" element={<Auth />} />
        <Route path="/mes-services" element={<Services />} />
        <Route path="/me-contacter" element={<Contacter />} />
      </Routes>
        
      </div>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
