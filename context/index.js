import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Router from 'next/router';
import React, { useState, createContext, useEffect, useContext } from 'react'
import { auth } from '../firebase/config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    password: user.password,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubcribe()
    }, [])
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = async () => {
        setUser(null)
        await signOut(auth)

    }
    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

