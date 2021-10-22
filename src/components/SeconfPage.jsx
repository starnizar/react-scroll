import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";

const SecondPage = () => {

    const pinkRef = useRef(null)
    const greyRef = useRef(null)
    const yellowRef = useRef(null)

    const location = useHistory()

    const scrollHandler = ref => ref.current.scrollIntoView()

    useEffect(() => {
        if(location.location.hash === '#pink') {
            window.scrollTo(0, pinkRef.current.offsetTop)
        }
        if(location.location.hash === '#yellow') {
            scrollHandler(yellowRef)
        }  
        if (location.location.hash === '') {
            scrollHandler(greyRef)
        }
    }, [location.location.hash])


    const scroll = () => {
        // console.log(pinkRef);
        window.scrollTo(0, pinkRef.current.offsetTop)
    }

    return (
        <>
        <div ref={greyRef} id='grey' className='red'>
            <button onClick={scroll}>SCROLL</button>
            <a href='#pink'>To pink</a>
            <a href='#yellow'>To yellow</a>
        </div>
        <div ref={pinkRef} id='pink' className='blue'>
            <a href='#grey'>To grey</a>
            <a href='#yellow'>To yellow</a>
        </div>
        <div ref={yellowRef} id='yellow' className='green'>
            <a href='#grey'>To grey</a>
            <a href='#pink'>To pink</a>
        </div>
        </>
    )
}

export default SecondPage