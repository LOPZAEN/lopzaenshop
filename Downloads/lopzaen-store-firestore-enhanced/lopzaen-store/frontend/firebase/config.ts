// Firebase config integrado para Lopzaen
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaLUkERv7Ny6YvydOPFrXiEk3j2OIPyfs",
  authDomain: "lopzaenshop.firebaseapp.com",
  projectId: "lopzaenshop",
  storageBucket: "lopzaenshop.firebasestorage.app",
  messagingSenderId: "428442695336",
  appId: "1:428442695336:web:b3cf06d36e9987ffe2349d"
};

export const firebaseApp = initializeApp(firebaseConfig);
