import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYMxmGReNZI1DeSKqHJ15uG7zljZND7Ds",
    authDomain: "socialchats-88451.firebaseapp.com",
    projectId: "socialchats-88451",
    storageBucket: "socialchats-88451.appspot.com",
    messagingSenderId: "461282623845",
    appId: "1:461282623845:web:5caa7f4d81d7bb69f1218c",
    measurementId: "G-56PDL59MMY"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};
