/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [isLoggedIn, setLogIn] = useState(false)

    const checkAuthStatus = ()=>{
        const Name = localStorage.getItem('userName')
        const token = localStorage.getItem('authToken')
        setLogIn(!!Name && !!token)
    }

    useEffect(()=>{
        checkAuthStatus();

    // Listen for `storage` events to detect changes in `localStorage`
        const handleStorageChange = (event) => {
            if (event.key === "userName") {
                checkAuthStatus();
            }    
        };

    // Add event listener
        window.addEventListener("storage", handleStorageChange);

    // Cleanup the listener on component unmount
        return () => {
        window.removeEventListener("storage", handleStorageChange);
        };
    }, [])

    const login = () => setLogIn(true)

    const logout = () => {
        Cookies.remove('Token')
        localStorage.removeItem('userName')
        localStorage.removeItem('authToken')
        setLogIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}