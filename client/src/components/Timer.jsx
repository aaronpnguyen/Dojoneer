import React, {useEffect, useState, useRef} from "react";

function Timer() {
    let [inputTime, setInputTime] = useState('');
    let [seconds, setSeconds] = useState(0);

    const renders = useRef(0);
    const timerId = useRef();

    const handleChange = (e) => {
        setInputTime(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(prev => prev + 1);
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        if (seconds) {
            renders.current++;
            setSeconds(0);
        }
    }

    return(
        <>
            <input type="int" value={inputTime} placeholder="Set Timer" onChange={handleChange} />
            <section>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>
            <p style={{color: "white"}}>Seconds: {seconds}</p>
            <p style={{color: "white"}}>{inputTime}</p>
        </>
    )
}


export default Timer;