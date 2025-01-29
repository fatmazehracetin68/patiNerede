import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBen4ePFP7d1jUn2eFJZsePoBmwaLU_4c",
  authDomain: "patinerede-62a74.firebaseapp.com",
  projectId: "patinerede-62a74",
  storageBucket: "patinerede-62a74.appspot.com",
  messagingSenderId: "800232587019",
  appId: "1:800232587019:web:8493273d759d191ada2c0e",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
