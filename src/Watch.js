import React, { useState,useEffect } from "react";

const Watch = () => { 
    const [currentTime, setcurrentTime]=useState(new Date());

    useEffect(() => {
        const interval=setInterval(() => {
            setcurrentTime(new Date());
        },1000);

        return () => clearInterval(interval);
    },[]);


    const getHoursNumber = () => {
        return (currentTime.getHours() % 12 * 30 + (currentTime.getMinutes() / 2));
    }

    const getMinutesNumber = () => {
        return currentTime.getMinutes() * 6 + (currentTime.getSeconds() / 10);
    }

    const getSecondsNumber = () => {
        return currentTime.getSeconds() * 6;
    }

    const renderNumbers = () => {
        const numbers=[];
        for (let i=1; i<=12; i++){
            numbers.push(<div key={i} className="number" style={{transform:`rotate(${i * 30}deg) translate(0,-200px) rotate(${-i * 30}deg)`}}>{i}</div>);
        }
        return numbers;
    }

    return(
            <div className="watch">
               <div className="watch-content">
                <div className="hour" style={{transform:`rotate(${getHoursNumber()}deg)`}}></div>
                <div className="minute" style={{transform:`rotate(${getMinutesNumber()}deg)`}}></div>
                <div className="second" style={{transform:`rotate(${getSecondsNumber()}deg)`}}></div>
                <div className="center"></div>
                {renderNumbers()}
                </div>
            </div>
    );
};

export default Watch;