import { createContext, useRef } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    
    const Authinfo = {
        homeRef,aboutRef,projectRef, contactRef
    }

    return <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;