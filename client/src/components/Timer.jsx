import React, {useEffect, useState, useRef} from "react";

function Timer() {
    let [inputTime, setInputTime] = useState('');
    let [seconds, setSeconds] = useState(inputTime);
    let [toggleStart, setToggleStart] = useState(false);
    let [toggleResume, setToggleResume] = useState(false)

    const renders = useRef(inputTime);
    const timerId = useRef();

    useEffect(() => {
        if (seconds === 0) {
            resetTimer()
        }
        // fuck u stupid error (ง︡'-'︠)ง
        // eslint-disable-next-line
    }, [seconds])

    const handleChange = (e) => {
        setInputTime(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        if (inputTime) {
            setSeconds(inputTime)
            timerId.current = setInterval(() => {
                renders.current++;
                setSeconds(inputTime => inputTime - 1);
            }, 1000)
            setToggleStart(true)
            setInputTime("")
        }
    }

    const resumeTimer = () => {
        setSeconds(seconds)
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(seconds => seconds - 1);
        }, 1000)
        setToggleResume(true)
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = inputTime;
        setToggleResume(true)
    }

    const resetTimer = () => {
        stopTimer();
        if (seconds) {
            renders.current--;
            setSeconds(inputTime);
        }
        setToggleStart(false)
        setToggleResume(false)
    }

    return(
        <>
            <input type="int" value={inputTime} placeholder="Set Timer" onChange={handleChange} />
            <section>
                {!toggleStart?
                    <button onClick={startTimer}>Start</button>:
                    <button disabled={!toggleResume} onClick={resumeTimer}>Resume</button>
                }
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>
            {
                <p style={{color: "white"}}>Seconds: {seconds}</p>
            }
        </>
    )
}


export default Timer;