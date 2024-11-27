import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification , createUserWithEmailAndPassword  } from "firebase/auth";

// Firebase 配置（可以從 Firebase 控制台獲取）
const firebaseConfig = {
    apiKey: "AIzaSyA96v4PeDQon2jP_oZTCAYyAbbtwN3IYw4",
    authDomain: "mumu-865bc.firebaseapp.com",
    databaseURL: "https://mumu-865bc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mumu-865bc",
    storageBucket: "mumu-865bc.firebasestorage.app",
    messagingSenderId: "893056676076",
    appId: "1:893056676076:web:96a2352625a709bbea35c9"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, sendEmailVerification ,createUserWithEmailAndPassword };