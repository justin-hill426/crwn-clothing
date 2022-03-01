import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import { useState, useEffect } from 'react';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



function App() {
  const [state, setState] = useState({
    currentUser: null
  })

  useEffect(() => {
    let unsubscribeFromAuth = null;
    
    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setState({currentUser: userAuth})
    });

    //when the component unmounts
    return () => {
      unsubscribeFromAuth();
    }
  }, [])


  return (
    <Router>
      <div>
        <Header currentUser={state.currentUser}/>
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
