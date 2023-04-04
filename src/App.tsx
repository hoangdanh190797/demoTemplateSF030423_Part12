import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import LoginRegister from './pages/LoginRegister';
import { Route, Routes } from "react-router-dom";
import TemplateHome from './template/TemplateHome';


function App() {
  return (
    <Routes>
      <Route path='/' element={<TemplateHome />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
