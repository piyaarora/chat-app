import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import './css/main.css'
import Register from './components/register';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Register} />
      <Route path="/chat" component={Chat} />
    </Router>

  );
}

export default App;
