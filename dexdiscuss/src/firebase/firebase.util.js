import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyA81-a5W-JfWGY-Ccb_6IQglkoaWJXMpYQ",
    authDomain: "dexdiscuss.firebaseapp.com",
    databaseURL: "https://dexdiscuss.firebaseio.com",
    projectId: "dexdiscuss",
    storageBucket: "dexdiscuss.appspot.com",
    messagingSenderId: "903658145108",
    appId: "1:903658145108:web:8321f9b5239e18ef50b4c1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;