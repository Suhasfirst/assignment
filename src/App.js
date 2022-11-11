import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import {Route, Routes} from "react-router-dom";
import Homepage from './components/Homepage';


function App() {
  const [data, setData] = useState();
  return (
    <div className="App">

      <Routes>
        <Route index element={<Login onPlayerLoad={(data) => setData(data)} />} />
        <Route path='/home' element={<Homepage data={data} />} />

      </Routes>
      {/*  */}

    </div>
  );
}

export default App;
