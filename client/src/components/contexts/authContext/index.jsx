import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig.js"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user);
                setUserLoggedIn(true);
            }else{
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
        });
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
