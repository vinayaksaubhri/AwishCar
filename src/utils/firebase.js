import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEqWskSvTBUApQNq-KVXVGOMgrGTDqk7M",
  authDomain: "awishcar-d6253.firebaseapp.com",
  databaseURL: "https://awishcar-d6253-default-rtdb.firebaseio.com",
  projectId: "awishcar-d6253",
  storageBucket: "awishcar-d6253.appspot.com",
  messagingSenderId: "788546781579",
  appId: "1:788546781579:web:5df7c08d74420a69f82f8e",
};
const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase();

export default database;
