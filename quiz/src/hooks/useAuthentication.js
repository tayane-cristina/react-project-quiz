import { db } from '../firebase/config'; 

import {
    getAuth, 
    createUserWithEmailAndPassword,
    updateProfile
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
            
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser
    }
};

