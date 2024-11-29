import React from 'react'
import wedding from "../assets/Img/png/hutan-pinus.png"
import amplop from "../assets/Img/png/Ap.png"
import kiri from "../assets/Img/png/kiri.png"
import kanan from "../assets/Img/png/kanan.png"
import Bc from "../assets/Img/png/bc.png"
import { Link } from 'react-router-dom';

const Awal = () => {
  return (
    <>
    <section className='bg-putih min-h-screen dark:bg-gray-900 ' >
      <div
        className="w-full h-96  shadow-3xl shadow-darkgold dark:shadow-white  text-center "
        style={{
          backgroundImage: `url(${wedding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center h-full ">
            <div className="border-4 border-white rounded-full flex-col flex w-64 h-64 pt-7">
              <span className="text-sm text-white ">hello, Friend</span>
              <span className="text-sm text-white ">we invite you to attend our wedding</span>
              <h1 className='text-4xl text-white  mt-10 font-Allura'>Udjo & Putri</h1>
              <img src={Bc} alt="" className='w-16 h-16  mx-auto'/>
            </div>
          </div>
        </div>
      
    <div className=" h-0 flex justify-center items-center  ">
      <img
            src={kanan}
            alt=""
            className='filter hue-rotate-300 saturate-200'
            />
            <Link to="/undangan">
      <button className="bg-darkgold text-putih  px-6 py-2 rounded-full flex items-center justify-center flex-col shadow-lg hover:shadow-xl transition-shadow duration-300  ">  
            <img
            src={amplop}
            alt=""
            />Open Invitation</button>
            </Link>
        <img
            src={kiri}
            alt=""
            className='filter hue-rotate-300 saturate-200'
            />
      </div>
      
    </section>
    </>
  )
}

export default Awal
