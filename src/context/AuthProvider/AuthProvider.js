import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

 
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

   const authInfo ={ createUser, signIn}
    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;