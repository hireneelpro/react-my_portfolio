// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDoc,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { projectData } from "../../assets/data";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChSnclmQpcTVhIerPQKvKC-6z81J-5H_g",
  authDomain: "my-portfolio-9135b.firebaseapp.com",
  projectId: "my-portfolio-9135b",
  storageBucket: "my-portfolio-9135b.appspot.com",
  messagingSenderId: "385133742291",
  appId: "1:385133742291:web:9cd7d90453ffa90fbd6c26",
  measurementId: "G-8ZKB2941F1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

export const storeCollectionAndDocuments = async (collectionKey, data) => {
  const collectionRef = collection(db, collectionKey);
  //  ===== storing all projects in one document name all-projects & collectionKey all-projects
  const docRef = doc(collectionRef, "all-projects");
  setDoc(docRef, { data });
  // ==== storing each project with different document name =====//
  
  // const batch = writeBatch(db);
  // data.forEach((object) => {
  //   const docRef = doc(collectionRef, object.name.toLowerCase());
  //   batch.set(docRef, object);
  // });
  // await batch.commit();
  console.log("stored ok.");
};

export const getCollectionAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const data = querySnapShot.docs.map((each) => each.data());
  return data;
};
