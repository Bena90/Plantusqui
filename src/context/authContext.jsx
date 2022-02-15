import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider} from '../firebase/index'

export const AuthContext = createContext ();
AuthContext.displayName = 'AuthContext'

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) =>{
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email) =>{
    return auth.sendPasswordResetEmail(email);
  }

  const updateEmail = (email) =>{
    return currentUser.updateEmail(email);
  }

  const updatePassword = (password) =>{
    return currentUser.updatePassword(password);
  }

  const signInWithGoogle = () => {
    
    return auth.signInWithPopup(provider);
  };

  useEffect (()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{signInWithGoogle, signup, login, logout, resetPassword, updateEmail, updatePassword, currentUser}}>
        {!isLoading && children}
    </AuthContext.Provider>
  )
}

