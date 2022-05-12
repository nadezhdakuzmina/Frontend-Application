import React from 'react';
import './App.css';
import Header from './containers/Header';
import Routing from './containers/Routing/Routing';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routing />
    </div>
    </BrowserRouter>
  );
}
export default App;
