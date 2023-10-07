import { createContext, useContext } from "react";
// import useAuth from "../hooks/useAuth";

const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    // const auth = useAuth();
    const auth = null;

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuthContext, AuthProvider};