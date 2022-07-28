import React, {useEffect, useState, useRef} from "react";
import TimerStyle from './styles/TimerStyle.css'

function Timer() {
    let [inputTime, setInputTime] = useState(0);
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
        setToggleResume(false)
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
        setInputTime(0)
    }

    return(
        <>

            <div className="timer">
                <div className="input-container">
                    <button className="math-operator" disabled={inputTime <= 0? true : false} onClick={() => setInputTime(parseInt(inputTime)-1)}>&#x2212;</button>
                    <input type="number" value={inputTime} min="0" placeholder="0" onChange={handleChange} className="time-input"/>
                    <button className="math-operator" onClick={() => setInputTime(parseInt(inputTime)+1)}>&#x2b;</button>
                </div>
                {
                    <p style={{color: "white"}} className="the-timer">Seconds: {seconds}</p>
                }

                <section className="btn-container">
                    {!toggleStart?
                        <button onClick={startTimer}>Start</button>:
                        <button disabled={!toggleResume} onClick={resumeTimer}>Resume</button>
                    }
                    <button onClick={stopTimer}>Stop</button>
                    <button onClick={resetTimer}>Reset</button>
                </section>
                {/*{
                    <p style={{color: "white"}}>Seconds: {seconds}</p>
                }*/}
            </div>

        </>
    )
}


export default Timer;