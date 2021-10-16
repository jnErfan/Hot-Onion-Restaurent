import FirebaseInitialize from '../Firebase/FirebaseInitialize';
import { GoogleAuthProvider, getAuth ,  signInWithPopup, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';

FirebaseInitialize();
const useFirebase = () => {
    const [user , setUser] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
        .catch(error => {
            console.log(error.message);
        })
    }

    const logOut = () => {
        signOut(auth).then(()=>{
            setUser("")
        }).catch(error => {
            console.log(error.message);
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
            }else{
               setUser('')
            }
        })
    }, [auth])

return {
    user, 
    setUser,
    googleSignIn,
    logOut
}
};

export default useFirebase;