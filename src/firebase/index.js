import firebase from 'firebase'
import  'firebase/firestore'
 
const app=firebase.initializeApp({
    apiKey: process.env.FIREBASEAPIKEY,
    authDomain: "proyecto-final-cc0b5.firebaseapp.com",
    projectId: "proyecto-final-cc0b5",
    storageBucket: "proyecto-final-cc0b5.appspot.com",
    messagingSenderId: "492908470013",
    appId: "1:492908470013:web:c334174c47b638aa266894",
    measurementId: "G-FK2DV3HD6C"
})

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)