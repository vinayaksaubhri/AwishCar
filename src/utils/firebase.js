import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSAsuJP7yu0ybO2YIJvhMreWV5qNugdYM",
  authDomain: "landing-page-818bd.firebaseapp.com",
  databaseURL:
    "https://landing-page-818bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "landing-page-818bd",
  storageBucket: "landing-page-818bd.appspot.com",
  messagingSenderId: "153268203671",
  appId: "1:153268203671:web:e0d3befab6e297de03f9d2",
};
const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase();

export default database;
