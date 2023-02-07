
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZaU6bDpMiaxPmAQ_mKwjUMiRREyJpPP4",
  authDomain: "social-media-app-5149d.firebaseapp.com",
  projectId: "social-media-app-5149d",
  storageBucket: "social-media-app-5149d.appspot.com",
  messagingSenderId: "751973294059",
  appId: "1:751973294059:web:7ce9c9d0d556553be443ae"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);