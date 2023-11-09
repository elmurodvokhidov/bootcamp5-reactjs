import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function Form() {
    const { getValue, addEvent, inputVal } = useContext(ContextData);

    return (
        <>
            <form>
                <div className="input_group">
                    <label htmlFor="name">Name</label>
                    <input value={inputVal.name} onInput={(e) => getValue(e)} type="text" name="name" id="name" />
                </div>

                <div className="input_group">
                    <label htmlFor="time">Time</label>
                    <input value={inputVal.time} onInput={(e) => getValue(e)} type="time" name="time" id="time" />
                </div>

                <div className="input_group">
                    <label htmlFor="date">Date</label>
                    <input value={inputVal.date} onInput={(e) => getValue(e)} type="date" name="date" id="date" />
                </div>

                <button type='button' className='gbBtn' onClick={addEvent}>Add event</button>
            </form>
        </>
    );
}

export default Form;