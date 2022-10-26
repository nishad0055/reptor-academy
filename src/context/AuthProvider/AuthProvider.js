import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

 
    
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
     
     
   const googleSignIn = (provider) =>{
       setLoading(true)
       return signInWithPopup(auth, provider)
   }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const githubSignIn = (Gitprovider) =>{
        setLoading(true)
        return signInWithPopup(auth, Gitprovider)
    }

   const authInfo ={user, createUser, signIn, logOut, googleSignIn, loading, githubSignIn}
    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;