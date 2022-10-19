import React from 'react';
import '../css/timer.css';
import { useState } from 'react';
function Timer() 
{
    const [time, setTime] = useState(new Date()); 
    
    setInterval(() => {setTime(new Date())}, 1000 );


    return (
        <div className="time">
            <div>
                <h1>  <i class="fa-solid fa-business-time"></i> Current Time </h1>
                <label>  {time.toLocaleTimeString()} </label>

            </div>
        </div>
    )
}
export default Timer;