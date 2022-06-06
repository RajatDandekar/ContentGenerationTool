import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG-l7w3p6TQVkGaZycDLTI4-ph5STmW8E",
  authDomain: "vizuaradelta.firebaseapp.com",
  projectId: "vizuaradelta",
  storageBucket: "vizuaradelta.appspot.com",
  messagingSenderId: "1010171251555",
  appId: "1:1010171251555:web:25bd9cde3c2a99e3682156",
  measurementId: "G-12DXPJRTRV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

