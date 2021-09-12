import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection,addDoc,getDocs} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore";
import "firebase/auth";


const firebaseApp = initializeApp({
apiKey: "AIzaSyCM1p7rKmgiv_sBbfZbjff7Y6pEXR3GCoE",
authDomain: "crwn-db-e1b2e.firebaseapp.com",
projectId: "crwn-db-e1b2e",
storageBucket: "crwn-db-e1b2e.appspot.com",
messagingSenderId: "1054925563403",
appId: "1:1054925563403:web:5e1d24949311aa4d6c090e",
measurementId: "G-WVEFHL9XF8"});


export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


onAuthStateChanged (auth, user => {
if(user !== null){
console.log(user.uid)
}else{
console.log('No user')
}
});



export const getData = async(user,additionalData) =>{

    if (!user) return;
    const createdAt = new Date();
    const {displayName,email,uid} = user;
    const data = await getDocs(collection(db,'users'));
    data.forEach (async doc =>{

    let exist = (doc.data().uid === uid)

    if(exist){
   
    }else{
        try {
        const docRef = await addDoc(collection(db, "users"), {
        displayName,
        email,
        uid,
        createdAt,
        ...additionalData
        });
                               
        console.log("Document written with ID: ", docRef.id);

        } catch (e) {
        console.error("Error adding document: ", e);
        } 
        return 
    }
    });
    return {
        ...user,
        createdAt, 
    };

    
}



const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);



export default firebase;