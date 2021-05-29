
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAU5aBIvz9OCsoFR2SeARQqUJTRkO5H2ew",
    authDomain: "visneyplus.firebaseapp.com",
    projectId: "visneyplus",
    storageBucket: "visneyplus.appspot.com",
    messagingSenderId: "954438557979",
    appId: "1:954438557979:web:c6300ad5bf9fa25c28f3be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()

const storage = firebase.storage()

export {storage,provider,auth};

export default db;