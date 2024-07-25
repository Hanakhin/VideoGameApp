import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNyqSD76nQAgxsPWTJrqyChwikud9fGdw",
    authDomain: "reactfirebaseapp-c4302.firebaseapp.com",
    projectId: "reactfirebaseapp-c4302",
    storageBucket: "reactfirebaseapp-c4302.appspot.com",
    messagingSenderId: "982431986447",
    appId: "1:982431986447:web:5906f0ee771a3c6358447a",
    measurementId: "G-6JP3VEK83R"

}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export{app,auth};