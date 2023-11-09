import React, { useState } from 'react'

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    const [user, setUser] = useState([
        {
            firstName: 'elmurod',
            lastName: 'vokhidov',
            city: 'Pop'
        },
        {
            firstName: 'Sardor',
            lastName: 'Tolipov',
            city: 'Namangan'
        },
        {
            firstName: 'Mansur',
            lastName: 'Rustamov',
            city: 'Toshkent'
        },
    ]);
    const [newUser, setNewUser] = useState({
        // id: '',
        firstName: '',
        lastName: '',
        city: '',
    });
    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(!modal)
    };

    function getUser(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    // Add new user to Global User Information
    function addNewUser() {
        setUser([
            ...user, { ...newUser }
        ])
        openModal();
    }


    return (
        <ContextData.Provider value={{
            user,
            setUser,
            modal,
            openModal,
            getUser,
            addNewUser,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;