import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from 'components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-xl font-bold underline">Population Simulator</h1>
      </header>
      <div className="relative h-32 w-32">
        <Sidebar />
      </div>
      <main>visualization</main>
      <footer></footer>
    </div>
  );
}

export default App;
