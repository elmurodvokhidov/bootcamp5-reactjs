import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ContextData = React.createContext();


function ContextFunction({ children }) {
    const cartNavigate = useNavigate();

    // Cart function
    function cartBtn() {
        cartNavigate('cart');
    };

    return (
        <ContextData.Provider value={{
            cartBtn
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction