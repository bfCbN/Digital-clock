import React, { useEffect, useState } from "react";

const Clock = ()=>{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },100);
        return ()=>{
            clearInterval(interval)}
    },[]);

    const formatTime = () =>{
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12 || 12;
        
        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-fuchsia-400">
            <span className="text-9xl text-gray-700 font-bold">{formatTime()}</span>
        </div>
    )
}

export default Clock;