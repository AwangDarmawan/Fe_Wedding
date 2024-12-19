import React from 'react'
import wedding from "../assets/Img/png/hutan-pinus.png"

function Satu() {
  return (
    <>
      <div
              className="w-full h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url(${wedding})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
             <div className="flex items-center justify-center h-full flex-col py-40 ">
                    <span className="text-xs font-thin text-white ">Ya allah the most loving</span>
                    <span className="text-xs font-thin text-white text-center mx-10  ">With your blessing, you bring us together in the bonds of holy matrimony</span>
                    <h1 className="font-bold font-Allura text-white text-5xl ">The wedding </h1>
                
                    <h1 className="font-bold font-Allura text-white text-5xl   ">Reja & Evi</h1>
                </div>      
              </div>
    </>
  )
}

export default Satu
