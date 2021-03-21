import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyA0KLU036xKZWSdoyg1ad0UbLB9ZDCMsaI",
  authDomain: "panier-achats-mickyelloow.firebaseapp.com",
  databaseURL: "https://panier-achats-mickyelloow-default-rtdb.firebaseio.com",
  projectId: "panier-achats-mickyelloow",
  storageBucket: "panier-achats-mickyelloow.appspot.com",
  messagingSenderId: "422473451568",
  appId: "1:422473451568:web:dbf4200993bf3c293d45f5"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
