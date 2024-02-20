import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from 'components/Sidebar/Sidebar';
import Content from 'components/Content/Content';

function App() {
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <div>Logo</div>
        </div>
      </header>
      <div className="flex">
        <Sidebar />
        <div className="w-full p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quam odit officiis magni doloribus ipsa dolore, dolores nihil
          accusantium labore, incidunt autem iure quae vitae voluptate, esse
          asperiores aliquam repellat. Harum aliquid non officiis porro at
          cumque eaque inventore iure. Modi sunt optio mollitia repellat sed ab
          quibusdam quos harum!
        </div>
      </div>
    </main>
  );
}

export default App;
