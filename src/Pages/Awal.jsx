
import wedding from "../assets/Img/png/hutan-pinus.png"
import amplop from "../assets/Img/png/Ap.png"
import kiri from "../assets/Img/png/kiri.png"
import kanan from "../assets/Img/png/kanan.png"
import Bc from "../assets/Img/png/bc.png"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import musik from '../assets/Img/audio/WhatsApp Audio 2024-11-30 at 10.40.35.mp3'


const Awal = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    // Menyimpan status audio di URL dengan query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const isAudioOn = urlParams.get('audio') === 'true';

    setAudioPlaying(isAudioOn);  // Update audio state berdasarkan query URL
  }, []);

  const toggleAudio = () => {
    setAudioPlaying((prev) => {
      const newStatus = !prev;
      // Memperbarui URL untuk mencatat status audio
      const url = new URL(window.location);
      url.searchParams.set('audio', newStatus ? 'true' : 'false');
      window.history.pushState({}, '', url.toString());
      return newStatus;
    });
  };
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
              <h1 className='text-4xl text-white  mt-10 font-Allura'>Reja & Evi</h1>
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
      <button className="bg-darkgold text-putih  px-6 py-2 rounded-full flex items-center justify-center flex-col shadow-lg hover:shadow-xl transition-shadow duration-300  " onClick={toggleAudio} >  
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
     
    <div className="text-center mt-36  py-6 text-gray-700  border-3  ">
    <h1 className="text-sm font-Montserrat font-semibold dark:text-darkgold">Copy Right Awang Darmawan</h1>
    <div className=''>
    <a href="https://wa.me/083125307355 " className='flex justify-center items-center gap-1 hover:text-green-500 dark:text-darkgold'><FaWhatsapp className=" text-2xl my-1"/>+6283125307355</a>
    <a href="https://instagram.com/awng_drmwn" className='flex justify-center items-center gap-1 hover:text-red-500 dark:text-darkgold'><FaInstagram className=" text-2xl my-1"/>--@awng_drmwn</a>
    </div>
  </div>
  {audioPlaying && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <audio autoPlay loop>
              <source src={musik} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
{audioPlaying && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <audio autoPlay loop>
            <source src={musik} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </section>

    
  
    </>
  )
}

export default Awal
