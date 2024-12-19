import React from 'react'
import wed from "../assets/Img/png/W1.png"
import wed2 from "../assets/Img/png/w2.png"

function Empat() {
  return (
    <>
       {/* Event Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-8  ">
          {/* Wedding Ceremony */}
          <div className="shadow-lg rounded-lg overflow-hidden flex justify-center items-center ">
            <img
              src={wed}
              alt="Wedding Party"
              className=" object-cover  opacity-30"
            />
            <div className="p-4 text-center absolute">
              <h2 className="font-Allura text-2xl font-semibold text-gold">Wedding Ceremony</h2>
              <p className="text-putih font-Montserrat ">08:00 PM - 10:00 PM</p>
              <button className="mt-4 bg-darkgold text-white py-2 px-6 rounded-full hover:bg-gold font-Montserrat">
                Open Map
              </button>
            </div>
          </div>
      
          {/* Wedding Party */}
          <div className="shadow-lg rounded-lg overflow-hidden flex justify-center items-center py-3 " id="waktu">
            <img
              src={wed2}
              alt="Wedding Party"
              className=" object-cover opacity-20 "
            />
            <div className="p-4 text-center absolute ">
              <h2 className="font-Allura text-2xl font-semibold text-gold">Wedding Party</h2>
              <p className="text-putih font-Montserrat">03:00 PM - 06:00 PM</p>
              <button className="mt-4 bg-darkgold text-white py-2 px-6 rounded-full hover:bg-gold font-Montserrat">
                Open Map
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Empat
