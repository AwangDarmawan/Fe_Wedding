

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';
import pria from "../assets/Img/png/pria.png" 
import wanita from "../assets/Img/png/wanita.png"

function Dua() {
  return (
    <>
       <div className="flex flex-col items-center bg-white min-h-screen py-10 dark:bg-slate-900 border-4">
      {/* Container utama */}
      <div className="bg-white w-[80%] rounded-xl text-center p-8 shadow-md dark:bg-gray-700">
        {/* Judul */}
        <h2 className="font-Montserrat text-black text-2xl font-semibold dark:text-gold">
          Meet The Happy Couple
        </h2>
        <p className="text-neutral-600 text-sm my-4 font-Montserrat dark:text-darkgold">
          Glory be to Allah SWT who has created creatures in pairs. Ya Allah, please accept and bless us
        </p>

        {/* Grid pasangan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Kolom pria */}
          <div className="flex flex-col items-center">
            <img
              src={pria}
              alt="Groom"
              className="w-[150px] h-[150px] rounded-full"
            />
            <h3 className="text-black  font-semibold text-xl mt-4 font-Montserrat dark:text-gold">Reja Jafar</h3>
            <p className="text-neutral-700 text-sm font-Montserrat dark:text-darkgold">Son of Mr. Ilham & Mrs. Fatima</p>
            {/* Ikon media sosial */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black  hover:text-darkgold dark:text-darkgold"
              >
                  <FaInstagram className="text-2xl text-black dark:text-gold " />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-darkgold dark:text-darkgold"
              >
                <FaFacebook className="text-2xl text-black  dark:text-gold" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-darkgold dark:text-darkgold"
              >
                <FaTwitter className="text-black text-2xl dark:text-gold"/>
              </a>
            </div>
          </div>

          {/* Kolom wanita */}
          <div className="flex flex-col items-center">
            <img
              src={wanita}
              alt="Bride"
              className="w-[150px] h-[150px] rounded-full "
            />
            <h3 className="text-black dark:text-gold font-semibold text-xl mt-4 font-Montserrat">Evi Amanda</h3>
            <p className="text-neutral-700  dark:text-darkgold text-sm font-Montserrat">Daughter of Mr. Ibrahim & Mrs. Etna Dewi</p>
            {/* Ikon media sosial */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-darkgold" 
              >
               <FaInstagram className="text-2xl text-black dark:text-gold" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:bg-darkgold"
              >
                  <FaFacebook className="text-2xl text-black dark:text-gold" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:bg-darkgold"
              >
               <FaTwitter className="text-black text-2xl dark:text-gold"/>
              </a>
            </div>
          </div>
        </div>
        {/* Tombol cerita */}
        <button className="mt-6 bg-darkgold text-white py-2 px-6 rounded-full hover:bg-gold">
          Our Story
        </button>
      </div>

      
    </div>
    </>
  )
}

export default Dua
