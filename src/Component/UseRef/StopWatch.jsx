import { useRef,useState } from "react";

const StopWatch = () => 
    {
        const [timer,setTimer] = useState(0)
        
        const refTime = useRef(null)

        const Start = () => 
            {
                refTime.current = setInterval(()=>
                    {
                        setTimer(timer => timer+1)
                    },1000);
            }

        const Stop = () => 
            {
                clearInterval(refTime.current)
                refTime.current = null;
            }

        const Reset  = () => 
            {
                Stop();
                setTimer(0);
            }

        return (
            <div>
                <h3>Stop Watch : {timer} seconds</h3>
                <button  onClick={Start}>Start</button>
                <button  onClick={Stop} >Stop</button>
                <button  onClick={Reset}>Reset</button>
            </div>
        );
    }

export default StopWatch;