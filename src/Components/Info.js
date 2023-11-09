import React, { useContext } from 'react'
import { ContextData } from '../context/Context'

function Info() {
    const { infoState } = useContext(ContextData);

    return (
        <div className='info'>
            {
                infoState.map((itm, ind) => {
                    return (
                        <div key={ind} className="info_card">
                            <h1>{itm.name}</h1>
                            <h3>{itm.time}</h3>
                            <h3>{itm.date}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Info