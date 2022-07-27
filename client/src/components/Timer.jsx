import React, {useEffect, useState} from "react";
import TimerStyle from './styles/TimerStyle.css'

function Timer() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
    
        const difference = +new Date(`01/01/${year+1}`) - +new Date();
        
        let timeLeft = {};
    
        if (difference > 0) {
            timeLeft = {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24), 
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    
        return timeLeft
    };
        
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearTimeout(timer);
    });
        const timerComponents = [];
    
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
    }
    
        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="timer">
            <h1>Own Date</h1>
            <input type="date" ></input>
            <br></br>
            {timerComponents.length ? timerComponents : <span>Time's Up!</span>}
        </div>
    );
}

export default Timer;