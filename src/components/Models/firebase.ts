import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig = {
    apiKey: "AIzaSyCXQb-MLdZVNh3aS_kvbhQYA_5hfW9mIos",
    authDomain: "alpha-business-centre.firebaseapp.com",
    projectId: "alpha-business-centre",
    storageBucket: "alpha-business-centre.firebasestorage.app",
    messagingSenderId: "845242151933",
    appId: "1:845242151933:web:d23310bf462a8ae3a55f94",
    measurementId: "G-GH7QGPMJTL"
  };

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
