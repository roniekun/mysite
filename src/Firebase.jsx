import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCbfEVWBnQQ0LtWmWQdomUifl8QOncSDM",
    authDomain: "netlify-project-contact-form.firebaseapp.com",
    projectId: "netlify-project-contact-form",
    storageBucket: "netlify-project-contact-form.appspot.com",
    messagingSenderId: "1062242217772",
    appId: "1:1062242217772:web:29e9de0bf9c2f49f5d4689"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db}