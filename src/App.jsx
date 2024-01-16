import React from 'react';
import './App.css';
import Menu  from "./components/Menu"; // Assuming Menu is a default export in Menu.js
import Part  from "./components/Part";
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Part5 from './components/Part5';
import Part6 from './components/Part6';

function App() {
  return (
    <div>
      <Menu />
      <Part />
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Part6/>      
    </div>
  );
}

export default App;

