import { useContext } from "react";
import { ContextData } from "../context/Context";
import React from 'react';

function Table() {
    const {
        info,
        infoFun,
        editFun,
        // deleteFun
    } = useContext(ContextData);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Event List</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.length > 0 ?
                            info.map((val, ind) => (
                                <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.time}</td>
                                    <td>{val.date}</td>
                                    <td>
                                        {/* <button onClick={() => deleteFun(val.id)}>done ✔</button> */}
                                        {/* <NavLink to={'info'}><button className="gbBtn">ℹ</button></NavLink> */}
                                        <button onClick={() => infoFun(val)} className="gbBtn">ℹ</button>
                                        <button className="gbBtn">✔</button>
                                        <button className="gbBtn">✖</button>
                                        <button onClick={() => editFun(val)} className="gbBtn">📝</button>
                                    </td>
                                </tr>
                            )) : <tr><td style={{ color: 'red', textAlign: 'center' }} colSpan={10}>Add new Information</td></tr>
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;