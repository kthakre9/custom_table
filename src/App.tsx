import React from "react";
import CustomTable from "./Table/CustomTable";
import data from "./data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomTable data={data} />
    </div>
  );
}

export default App;
