import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
    }

    return {
        user, setUser,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;