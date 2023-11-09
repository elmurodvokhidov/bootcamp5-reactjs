import React, { useState } from "react";

export const ContextData = React.createContext();

function ContextFun({ children }) {
    const [user, setUser] = useState('Kerakli ma\'lumot');

    return (
        <ContextData.Provider value={{
            user,
            setUser
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFun;