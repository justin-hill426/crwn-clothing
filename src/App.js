import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {


  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         //set somthing 
        });
      }
      //set current user
    });

    //when the component unmounts
    return () => {
      unsubscribeFromAuth();
    }
  }, [])


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


export default connect(null, null)(App);
