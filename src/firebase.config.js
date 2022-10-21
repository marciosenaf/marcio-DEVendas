import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0qHsL5HWCKHftqXipZLSZ2N30rETIUa8",
    authDomain: "marciodevendas-af590.firebaseapp.com",
    projectId: "marciodevendas-af590",
    storageBucket: "marciodevendas-af590.appspot.com",
    messagingSenderId: "224892862046",
    appId: "1:224892862046:web:f5d6b6dda4ebca66e6becf",
    measurementId: "G-FJQ7ZS3M1F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app