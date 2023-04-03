import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      <LoginRegister></LoginRegister>
    </div>
  );
}

export default App;
