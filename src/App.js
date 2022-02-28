import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path='/signin' element={<SignInSignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
