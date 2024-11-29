import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnKdUw_M4XH_LB9ZGvl3tmWVNHkoyeODE",
  authDomain: "pixelfusion-d6f4b.firebaseapp.com",
  projectId: "pixelfusion-d6f4b",
  storageBucket: "pixelfusion-d6f4b.firebasestorage.app",
  messagingSenderId: "271515772615",
  appId: "1:271515772615:web:0277b0547b2b90236e80e2",
  measurementId: "G-DXCVBY6HE3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
