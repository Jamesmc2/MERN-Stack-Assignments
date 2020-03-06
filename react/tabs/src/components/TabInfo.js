import React, { useState } from 'react';

const TabInfo = props => {
    const [descrip, setDescrip] = useState('')
    const [tab, setTab] = useState({
        Tab1: 'This is tab 1. Good job!',
        Tab2: 'Tab 2. Not so special is it.',
        Tab3: 'The last tab, tab3!'
    });
    const clickHandler = (e,key) => {
        setDescrip(tab[key]);
    }




    return (
        <div>
            <input type='button' value='Tab1' onClick={(e) => clickHandler(e,'Tab1')} />
            <input type='button' value='Tab2' onClick={(e) => clickHandler(e,'Tab2')} />
            <input type='button' value='Tab3' onClick={(e) => clickHandler(e,'Tab3')} />
            <p>{descrip}</p>
        </div>
    )
}
export default TabInfo