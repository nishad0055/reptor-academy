import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

 
    
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const logOut = () =>{
        return signOut(auth)
    }
     
     
   const googleSignIn = (provider) =>{
       return signInWithPopup(auth, provider)
   }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

   const authInfo ={user, createUser, signIn, logOut, googleSignIn}
    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;