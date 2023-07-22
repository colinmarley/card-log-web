import React from 'react';
import logo from './logo.svg';

import './App.css';
import CLAvatar from './component/common/CLAvatar';

function App() {
  console.log("App Starting")
  return (
    <div className="App">
      <CLAvatar fullName={''}/>
    </div>
  );
}

export default App;
