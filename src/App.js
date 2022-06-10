import React from 'react';
import './App.css';
import LogicLayout from './containers/LogicLayout';
import Header from './containers/Header';
import Routing from './containers/Routing/Routing';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <LogicLayout>
        <Header />
        <Routing />
      </LogicLayout>
    </BrowserRouter>
  );
}
export default App;
