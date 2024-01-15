import React from 'react';
import './App.css';
import Menu  from "./components/Menu"; // Assuming Menu is a default export in Menu.js
import Part  from "./components/Part";
import Part2 from './components/Part2';

function App() {
  return (
    <div>
      <Menu />
      <Part />
      <Part2/>
    </div>
  );
}

export default App;

