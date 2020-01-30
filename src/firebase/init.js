import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArRrIdTRfw0AddwYPeMgkh4d9Vqbf_hQo",
    authDomain: "ninja-smoothies-2542c.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-2542c.firebaseio.com",
    projectId: "ninja-smoothies-2542c",
    storageBucket: "ninja-smoothies-2542c.appspot.com",
    messagingSenderId: "121566112913",
    appId: "1:121566112913:web:3bc17e01c8d99bf3412330",
    measurementId: "G-2YTDFYERS3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()
