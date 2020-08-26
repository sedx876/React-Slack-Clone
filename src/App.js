import React from 'react';
import './styles/App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
