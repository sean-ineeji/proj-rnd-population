import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from 'components/Sidebar/Sidebar';
import Content from 'components/Content/Content';
import SimulationMap from 'components/Content/Visualization/SimulationMap';

function App() {
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      {/* <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <div>Logo</div>
        </div>
      </header> */}
      <div className="flex-1 flex" style={{ height: '90.5vh' }}>
        <Sidebar />
        <Content />
        {/* <SimulationMap /> */}
      </div>
    </main>
  );
}

export default App;
