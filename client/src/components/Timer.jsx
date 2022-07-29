import { set } from "mongoose";
import React, {useEffect, useState} from "react";
import TimerStyle from './styles/TimerStyle.css'

function Timer() {
    let [input, setInput] = useState(1)
    let [minutes, setMinutes] = useState(input)
    let [seconds, setSeconds] = useState(0)
    let [count, setCount] = useState(0)
    let [toggleStart, setToggleStart] = useState(false)
    let [toggleResume, setToggleResume] = useState(true)
    let alarm = require('../assets/alarm.mp3');

    useEffect(() => {
        if (minutes === 0 && seconds === 0 && toggleStart) {
            new Audio(alarm).play();
            resetTimer()
        }
    })

    // if (seconds === 0 && toggleStart === true){
    //     new Audio(alarm).play();
    // }

    const changeHandler = e => {
        setInput(e.target.value)
        setMinutes(e.target.value)
    }

    const startTimer = () => {
        setInput(0)
        const countdown = setInterval(() => {
            seconds--
            if (seconds === -1) {
                seconds = 0
            }
            setMinutes(minutes)
            setSeconds(seconds)
            if (seconds === 0) {
                minutes--
                seconds = 60
            }
        }, 1000)
        setCount(countdown)
        setToggleStart(true)
    }

    const resumeTimer = () => {
        const countdown = setInterval(() => {
            seconds--
            if (seconds === -1) {
                seconds = 0
            }
            setMinutes(minutes)
            setSeconds(seconds)
            if (seconds === 0) {
                minutes--
                seconds = 60
            }
        }, 1000)
        setCount(countdown)
        setToggleResume(true)
    }

    const stopTimer = () => {
        setToggleResume(false)
        if (count) {
            clearInterval(count)
            setCount(false)
            return
        }
    }

    const resetTimer = () => {
        stopTimer()
        setMinutes(1)
        setSeconds(0)
        setToggleResume(true)
        setToggleStart(false)
    }

    return(
        <div className="timer">
            <div className="input-container">
                <button className="math-operator" disabled={input <= 0? true : false} onClick={() => setInput(parseInt(input) - 1)}>&#x2212;</button>
                <input type="number" min="0" value={input} placeholder="0" onChange={e => changeHandler(e)} className="time-input"/>
                <button className="math-operator" onClick={() => setInput(parseInt(input) + 1)}>&#x2b;</button>
            </div>
            {toggleStart?
                <p style={{color: "white"}} className="the-timer">{minutes}:{seconds >= 10?seconds: <span>0{seconds}</span>}</p>:
                <h3 style={{color: "red"}}>You must put an input greater than 0!</h3>
            }
            <section className="btn-container">
                {!toggleStart?
                    <button className="timer-button timer-button-start" disabled={input > 0? false: true}onClick={startTimer}>Start</button>:
                    <button className="timer-button timer-button-start" disabled={toggleResume} onClick={resumeTimer}>Resume</button>
                }
                <button className="timer-button timer-button-stop" disabled={!toggleStart}onClick={stopTimer}>Stop</button>
                <button className="timer-button timer-button-reset" disabled={!toggleStart} onClick={resetTimer}>Reset</button>
            </section>
        </div>
    )
}

export default Timer;