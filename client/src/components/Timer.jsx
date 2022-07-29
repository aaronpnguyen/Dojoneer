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

    useEffect(() => {
        addTime()
        subtractTime()
    })

    const addTime = () => {
        setMinutes(input => input + 1)
        setInput(minutes)
    }

    const subtractTime = () => {
        setMinutes(input => input - 1)
        setInput(minutes)
    }

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

    const resumeTimer = (e) => {
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
                <button className="math-operator" disabled={input <= 0? true : false} onClick={subtractTime}>&#x2212;</button>
                {!toggleStart?
                    <input type="number" min="1" value={input} placeholder="0" onChange={e => changeHandler(e)} className="time-input"/>:
                    <input disabled type="number" className="time-input"/>
                }
                <button className="math-operator" onClick={addTime}>&#x2b;</button>
            </div>
            <p style={{color: "white"}} className="the-timer">{minutes}:{seconds >= 10?seconds:<span>0{seconds}</span>}</p>
            <section className="btn-container">
                {!toggleStart?
                    <button className="timer-button timer-button-start" disabled={input > 0? false: true}onClick={e => startTimer(e)}>Start</button>:
                    <button className="timer-button timer-button-start" disabled={toggleResume} onClick={resumeTimer}>Resume</button>
                }
                <button className="timer-button timer-button-stop" disabled={!toggleStart}onClick={stopTimer}>Stop</button>
                <button className="timer-button timer-button-reset" disabled={!toggleStart} onClick={resetTimer}>Reset</button>
            </section>
        </div>
    )
}

export default Timer;