import React from 'react';
import Logs from './pages/Logs';
import { Header } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header as='h1' style={{ color: 'white' }}>Server Logs</Header>
        <Logs />
      </div>
    </div>
  );
}

export default App;
