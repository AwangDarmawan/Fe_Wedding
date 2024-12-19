
import React, { useEffect, useRef } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import musik from '../assets/Img/audio/pernikahan.mp3'
import Nav from "./Nav";
import Satu from "./Satu";
import Dua from "./dua";
import Tiga from "./Tiga";
import Empat from "./Empat";
import Lima from "./Lima";
import Enam from "./Enam";
import Tujuh from "./Tujuh";
import Delapan from "./Delapan";
import Sembilan from "./Sembilan";
import Footer from "./Footer";


const Keseluruhan = () => {
  
  // Use useEffect to automatically play the audio when the component is mounted
  const audioRef = useRef();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
     
    }
  }, []);
  
  return (
    <> 

    
    {/* nav */}
    <div className="min-h-screen bg-white  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <section>
   <Nav />
    </section>
{/* section 1 */}
    <section>
      <Satu/>
    </section>

{/* section2 */}
    <section id="home">
   <Dua/>
   </section>


{/* section3 */}
  
  <div className="bg-putih min-h-screen py-8 px-4  dark:bg-gray-900">
  <Tiga/>

  {/* Section 4 */}
  <section>
  {/* Event Sections */}
  <Empat/>
  </section>

 {/* Section 5 */}
  {/* Map Section */}
  <section >
 <Lima/>
  </section>
</div>

 {/* Gallery */}
 {/* Section 6 */}
    <section id="map">
    <Enam/>
    </section>

    {/* section 7 */}
  <section id="gift">
   <Tujuh/>
</section>
   
   {/* say something */}
   {/* Section 8 */}
<section className="bg-slate-50 py-10 px-4 lg:px-20 dark:bg-gray-900 dark:border-4">
      <Delapan/>

    </section>

  {/* Section 9 */}
    <section >
    <Sembilan/>
    </section>

 {/* section footer */}
     <Footer/>
  </div>

{/* musik */}
  <div className="absolute bottom-4 bg-transparent w-full text-center" >
  <audio ref={audioRef} className="bg-transparent mx-auto w-64">
    <source src={musik} type="audio/mp3" />
    Your browser does not support the audio element.
  </audio>
</div>
    </>
  )
}

export default Keseluruhan

