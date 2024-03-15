import React, { useState,useEffect } from "react";

export default function Body(){
    let param=new Date();
const [time, setTime]=useState(param);
   useEffect(() => {
    const fetcTime = async () => {
        try{
            const response = await fetch('http://worldtimeapi.org/api/timezone');
            const data = await response.json();
            setTimeout(param(data.current_time));
        }
        catch(error){
            console.error('Error.Try again!');
        }
    };
    fetcTime();

    const interval=setInterval(() => {
        fetcTime();
    },1000);

    return () => clearInterval(interval);
   }, []);

   useEffect(() => {
    const interval=setInterval(() => {
        setTime(new Date());
    },1000);

    return () => clearInterval(interval);
},[]);

   const formatTime = (time) =>{
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
   }

    return (
        <p className="main-text">It is {formatTime(time)}.</p>
    )
};