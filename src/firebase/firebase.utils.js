import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBNRhBQIiTLOpU38RdW9BuuwweFCreZy-M",
    authDomain: "login-4efa2.firebaseapp.com",
    projectId: "login-4efa2",
    storageBucket: "login-4efa2.appspot.com",
    messagingSenderId: "537058271681",
    appId: "1:537058271681:web:959d6dba33c97341ca0f40",
    measurementId: "G-1MMS9JMM4S"
  };

  
  export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return
    
    const userRef= firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get() 

    if(!snapShot.exists){
 const{displayName,email} =userAuth;
 const createdAt = new Date();

 try{
await userRef.set({
 displayName,
 email,
 createdAt,
...additionalData
})
 } catch(error){
console.log('error creating user' ,error.message)
 }
    }
    return userRef;
  }
  firebase.initializeApp(config); 

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});

//   export const signInWithGoogle=() => auth.signInWithPopup(provider)




  export default firebase