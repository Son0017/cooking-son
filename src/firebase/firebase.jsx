import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaUcv6TEl187KBdaFfSt0WJvufZUXrKi8",
  authDomain: "son-cooking.firebaseapp.com",
  projectId: "son-cooking",
  storageBucket: "son-cooking.appspot.com",
  messagingSenderId: "172041341165",
  appId: "1:172041341165:web:7aa7a48e6f115d67a264e4",
};
// init firestore
const app = initializeApp(firebaseConfig);
// data
export const db = getFirestore(app);

export const getData = async () => {
  const data = [];
  const req = await getDocs(collection(db, "recipies"));
  req.docs.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

export const getOne = async (id) => {
  const docSnap = await getDoc(doc(db, "recipies", id));

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const postDoc = async (data) => {
  const docRef = await addDoc(collection(db, "recipies"), { ...data });
  return docRef.id;
};

export const deleteItem = async (id) => {
  await deleteDoc(doc(db, "recipies", id));
};
