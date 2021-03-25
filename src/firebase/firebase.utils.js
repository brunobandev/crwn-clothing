import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvWv19UTsppxGv27KM5_xni-oHjcdenZQ",
  authDomain: "crwn-db-57501.firebaseapp.com",
  projectId: "crwn-db-57501",
  storageBucket: "crwn-db-57501.appspot.com",
  messagingSenderId: "674998437605",
  appId: "1:674998437605:web:692849854323b1e6d1b60c",
  measurementId: "G-1XHBWMR02C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
