import React from 'react';
import './App.css';
import Nav from './Component/Nav';
import Main from './Component/Main';
import Footer from './Component/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;