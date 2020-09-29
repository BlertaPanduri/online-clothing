import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyADPE9FnU1hGysl6s_YREdBK-P_2UGDj_k",
    authDomain: "onlineshop-db-75d7f.firebaseapp.com",
    databaseURL: "https://onlineshop-db-75d7f.firebaseio.com",
    projectId: "onlineshop-db-75d7f",
    storageBucket: "onlineshop-db-75d7f.appspot.com",
    messagingSenderId: "179362702807",
    appId: "1:179362702807:web:feaf54152d40673c8b1792",
    measurementId: "G-DMM6W0R899"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

