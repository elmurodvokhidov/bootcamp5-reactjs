import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    // All informations state
    const [info, setInfo] = useState([]);

    // Inputs state
    const [inputVal, setInputVal] = useState({
        id: '',
        name: '',
        time: '',
        date: '',
    });

    // Info state
    const [infoState, setInfoState] = useState([]);

    // Info navigate
    const infoNavigate = useNavigate();
    // Home navigate
    const homeNavigate = useNavigate();
    // Edit navigate
    const editNavigate = useNavigate();

    // Clear inputs
    function clearFun() {
        setInputVal({
            id: '',
            name: '',
            time: '',
            date: '',
        })
    };

    // Get value from inputs
    function getValue(e) {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        });
    };

    // Add new Event
    function addEvent() {
        if (inputVal.name !== '' && inputVal.time !== '' && inputVal.date !== '') {
            // Ma'lumot qo'shish
            if (inputVal.id === '') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your event has been added',
                    showConfirmButton: false,
                    timer: 1500
                })
                setInfo([...info, { ...inputVal, id: new Date().getTime() }])
            }
            // Ma'lumotni tahrirlash
            else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your event has been updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                setInfo((oldInfo) => (oldInfo.map(item => item.id === inputVal.id ? { ...item, ...inputVal } : item)))
            }
            clearFun();
            homeNavigate('/');
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all blanks!',
            })
        }
    };

    // Info function
    function infoFun(item) {
        setInfoState([item]);
        infoNavigate('info');
    };

    // Edit function
    function editFun(item) {
        editNavigate('add');
        setInputVal(item);
    };

    // delete elements
    // function deleteFun(id) {
    //     // setInfo(info.filter((item) => {
    //     //     return item.id !== id
    //     // }))
    //     setInfo((ozi) => (ozi.filter(item => item.id !== id)));
    // }

    return (
        <ContextData.Provider value={{
            info,
            getValue,
            addEvent,
            infoFun,
            inputVal,
            infoState,
            editFun,
            // deleteFun
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunction;