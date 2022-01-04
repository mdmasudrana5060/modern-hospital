import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.initialize";


initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const GoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
        });
    }, [])

    const LogOut = () => {
        signOut(auth).then(() => {
            setUser({})


        })
            .catch((error) => {

            });
    }

    return {
        user,
        GoogleSignIn,
        LogOut

    }
}
export default useFirebase;