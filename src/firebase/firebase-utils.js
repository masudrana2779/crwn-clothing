import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyClA6A2i1ssCVIys_14q3_kxafEg4PqtfE",
    authDomain: "crwn-db-c66f4.firebaseapp.com",
    databaseURL: "https://crwn-db-c66f4-default-rtdb.firebaseio.com",
    projectId: "crwn-db-c66f4",
    storageBucket: "crwn-db-c66f4.appspot.com",
    messagingSenderId: "137773020488",
    appId: "1:137773020488:web:6873c489fe3ed8f924af7d",
    measurementId: "G-HR7HX8E8RY"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "Select_account"});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;