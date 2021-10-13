import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {

    const [isAuth, toggleAuth] = useState(false);
    const history = useHistory();

    function login() {
        toggleAuth(true);
        console.log("De gebruiker is ingelogd.");
        history.push("/profile");
    }

    function logout() {
        toggleAuth(false);
        console.log("De gebruiker is uitgelogd.");
        history.push("/");
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

