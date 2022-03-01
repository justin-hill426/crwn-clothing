import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAlu8ipHKv3Fnp6Bl6i-lK7jfQjzKYG16c",
  authDomain: "crwn-db-11102.firebaseapp.com",
  projectId: "crwn-db-11102",
  storageBucket: "crwn-db-11102.appspot.com",
  messagingSenderId: "436390433572",
  appId: "1:436390433572:web:a4fadfa9bc75eda64659b1",
  measurementId: "G-VFLPWKZ7M8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message );
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;