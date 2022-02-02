import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.initialize";


initializeAuthentication();


const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ');



    const handleNameChange = e => {
        setName(e.target.value);

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        console.log(name, email, password);
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();

            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);

            });

    }
    const processLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))


    }

    const GoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])

    const LogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})


        })
            .finally(() => setIsLoading(false))
    }

    return {
        handleRegistration,
        handleEmailChange,
        handleNameChange,
        handlePasswordChange,
        isLoading,
        user,
        name,
        error,
        GoogleSignIn,
        processLogin,
        LogOut

    }
}
export default useFirebase;