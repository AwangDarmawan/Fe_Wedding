import  { useEffect, useState } from 'react'

function Tiga() {
     const targetDate = new Date("2025-12-22T00:00:00").getTime(); 
  
       // Set initial state for the countdown
       const [timeLeft, setTimeLeft] = useState({
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0
       });
     
       useEffect(() => {
         const interval = setInterval(() => {
           const now = new Date().getTime();
           const distance = targetDate - now;
     
           if (distance < 0) {
             clearInterval(interval);
             setTimeLeft({
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0
             });
           } else {
             // Calculate the time remaining
             setTimeLeft({
               days: Math.floor(distance / (1000 * 60 * 60 * 24)),
               hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
               minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
               seconds: Math.floor((distance % (1000 * 60)) / 1000)
             });
           }
         }, 1000);
     
         return () => clearInterval(interval);
       }, [targetDate]);
    
  return (
    <>
   {/* Header */}
   <div className="text-center mb-8">
    <h1 className="text-3xl font-semibold text-black font-Montserra dark:text-gold">We’re Getting Married</h1>
    <p className="text-sm text-black mt-2 font-Montserrat dark:text-darkgold">Jl.Kp.Halimun Rt003 Rw 004  </p>
    <p className="text-md text-neutral-600 mt-2 font-Montserrat dark:text-darkgold">22 Desember 2025</p>
  </div>

  
  {/* Countdown */}
  <div className="flex justify-center mb-8">
    <div className="bg-darkgold py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.days}<br /> H
    </div>
    <div className="bg-darkgold py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.hours} <br /> D
    </div>
    <div className="bg-darkgold py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.minutes} <br /> M
    </div>
    <div className="bg-darkgold py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.seconds} <br /> S
    </div>
  </div>

    </>
  )
}

export default Tiga
