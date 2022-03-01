import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBcTHJxMkDq17N7NodijLomJR_-PbPEiUQ",
  authDomain: "movie-box-f85f1.firebaseapp.com",
  projectId: "movie-box-f85f1",
  storageBucket: "movie-box-f85f1.appspot.com",
  messagingSenderId: "506807973528",
  appId: "1:506807973528:web:3458daa3081270db1382ed",
};
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
console.log(firestore);
const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
