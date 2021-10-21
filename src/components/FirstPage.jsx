import React from "react";

const FirstPage = () => {
    return (
        <>
        <div id='red' className='red'>
             <a href='#blue'>To blue</a>
            <a href='#green'>To green</a>
        </div>
        <div id='blue' className='blue'>
            <a href='#red'>To red</a>
            <a href='#green'>To green</a>
        </div>
        <div id='green' className='green'>
            <a href='#red'>To red</a>
            <a href='#blue'>To blue</a>
        </div>
        </>
    )
}

export default FirstPage