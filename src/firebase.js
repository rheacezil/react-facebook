import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8emPztFbbFEAHPwX6TZhzzxACIgDjOF0",
    authDomain: "react-facebook-cb629.firebaseapp.com",
    projectId: "react-facebook-cb629",
    storageBucket: "react-facebook-cb629.appspot.com",
    messagingSenderId: "1042631590146",
    appId: "1:1042631590146:web:efcec53c14276aaa86421b"
  };

// Use this to initialize firebase APP
const firebaseapp = firebase.initializeApp(firebaseConfig)

// Use these db, auth, provider
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();