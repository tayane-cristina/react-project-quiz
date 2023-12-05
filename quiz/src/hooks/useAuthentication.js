import { db } from '../firebase/config'; 

import {
    getAuth, 
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth'

import {useState, useEffect} from 'react';

export function useAuthenticator () {

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    //CLEAN UP
    const checkIfIsCancelled = () => {
        
        if (cancelled) {
            return;
        }
    };

    //REGISTER
    const createUser = async(data) => {
        
        checkIfIsCancelled()

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
                )
    
                await updateProfile(user, {
                    displayName: data.displayName
                })

                return user;
            
        } catch (error) {
            console.log(error.message)
        }
    }

    //LOGOUT
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    //LOGIN
    const login = async(data) => {
        checkIfIsCancelled()

        try {
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            
        } catch (error) {
            console.log(error.message) 
        }

    } 

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        logout,
        login
    }
};

