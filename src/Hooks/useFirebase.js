import FirebaseInitialize from '../Firebase/FirebaseInitialize';
import { GoogleAuthProvider, getAuth ,  signInWithPopup, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';

FirebaseInitialize();
const useFirebase = () => {
    const [user , setUser] = useState('');
    const [isLoading , setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
        .catch(error => {
            console.log(error.message);
        }).finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth).then(()=>{
            setUser("")
        }).catch(error => {
            console.log(error.message);
        }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
            }else{
               setUser('')
            }
             setIsLoading(false)
        })
    }, [auth])

return {
    user, 
    setUser,
    googleSignIn,
    logOut,
    isLoading
}
};

export default useFirebase;