import React from 'react';
import CustomTable from './components/CustomTable';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App" role="main">
      <CustomTable data={data} />
    </div>
  );
}

export default App;
