// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBAiFD96X8SYSvTLMnOK3j4EstXuU3KGTQ',
    authDomain: 'dotit-base-website.firebaseapp.com',
    projectId: 'dotit-base-website',
    storageBucket: 'dotit-base-website.appspot.com',
    messagingSenderId: '961054277610',
    appId: '1:961054277610:web:bcb65a118cdc50c63e7c93',
};

// Initialize Firebase
export const fireApp = initializeApp(firebaseConfig);
