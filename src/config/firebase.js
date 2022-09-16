import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzEsEfdjMHoVbcjBHz0vjo1Y3UQEGF1kA",
  authDomain: "appbank-a25d4.firebaseapp.com",
  projectId: "appbank-a25d4",
  storageBucket: "appbank-a25d4.appspot.com",
  messagingSenderId: "959798429729",
  appId: "1:959798429729:web:7baa7ae04a2835d30cfb60",
  measurementId: "G-V47F5K0CVR",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
