import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from '../../components/Firebase/Firebase';

export const Authinfo=createContext(null)

const Authcontext = ({children}) => {
    const [user,setuser]=useState([])
    const [loading,setloading]=useState(true)
    

    // create user
   const createUser=(email,password)=>{
    setloading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }
  //  sign in user
   const signinUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
// log out
const logOut=()=>{
    setloading(true)
    return signOut(auth)
}
    //  unsubscribe for  
    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            setloading(false)
        })

        return () => {
            unsubscribe();
        }

    }, [])
    // auth information
    const authinformaion={user,createUser,signinUser,logOut,loading}
    return (
        <Authinfo.Provider value={authinformaion}>
           {children}
        </Authinfo.Provider>
    );
};

export default Authcontext;