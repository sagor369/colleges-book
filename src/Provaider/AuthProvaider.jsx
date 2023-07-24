import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app);
const provaider = new GoogleAuthProvider()

const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleuser = () =>{
        setLoading(true)
        return signInWithPopup(auth, provaider)
    }
    const authInfo = {
        signIn,
        signUp,
        googleuser,
        user,
        loading
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (users) =>{
            setUser(users)
        })
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;