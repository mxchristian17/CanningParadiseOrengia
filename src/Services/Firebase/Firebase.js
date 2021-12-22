import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkRzVhRAqb3Oga0DIaFN663bfvHiIsVYg",
    authDomain: "canningparadise.firebaseapp.com",
    projectId: "canningparadise",
    storageBucket: "canningparadise.appspot.com",
    messagingSenderId: "654652979445",
    appId: "1:654652979445:web:c2429b0a7e35005903adbc"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);