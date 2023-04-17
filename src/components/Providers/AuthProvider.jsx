import React, { createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const user = {displayName: 'Md. Imrul kayes'}
    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider, AuthContext};