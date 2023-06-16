import React, { useState, useEffect } from "react";

const Timer =()=> {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds +1);
        }, 1000);

        return ()=> {
            clearInterval(interval)
        };
    }, []);
    return (
        <div>
            <h1 style={{fontFamily:"monospace", fontWeight:"bold", color:'ButtonShadow', textAlign:'center', paddingTop:'30px'}}>Timer :{seconds} seconds</h1>
        </div>
    )
}

export default Timer;