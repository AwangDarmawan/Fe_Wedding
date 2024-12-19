import React, { useState,useEffect } from "react";

import Toggle from "../assets/Img/png/Toogle.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faImages, faGift, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Nav() {
  const [navOpen, setNavOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const savedMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(savedMode);
      if (savedMode) {
        document.documentElement.classList.add("dark");
      }
    }, []);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
     <nav className="py-4 px-20 fixed w-full">
            <div className="container">
              <div className="flex items-center justify-between">
              <div className="flex flex-row-reverse gap-3 ">
            <button
              onClick={toggleDarkMode}
              className="relative inline-flex items-center cursor-pointer rounded-full w-12 h-6 bg-gray-300 dark:bg-gray-700 transition-all duration-300  "
            >
              {/* Ikon Matahari dan Bulan */}
              <span
                className={`absolute text-lg left-1 transition-transform duration-300 ease-in-out transform ${
                  darkMode 
                }`}
              >
                ☀️
              </span>
              
              <span
                className={`absolute text-sm right-1 transition-transform duration-300 ease-in-out transform ${
                  darkMode 
                }`}
              >
                🌙 
              </span>
    
              <span className="sr-only">Toggle Dark Mode</span>
              
              {/* Bulb */}
              <span
                className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
                  
           
                </div>
                <img
                  onClick={() => setNavOpen(!navOpen)}
                  src={Toggle}
                  alt=""
                  className="order-2 sm:order-1 lg:hidden filter invert brightness-2 bg-transparent"
                />
                <div className="order-2 hidden lg:block">
                  <ul className="flex gap-16">
                    <li>
                      <a href="" className="text-pink-500 hover:text-pink-600">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#waktu" className="text-pink-500 text-sm hover:bg-sky-700">
                        Waktu
                      </a>
                    </li>
                    <li>
                      <a href="#map" className="text-pink-500 text-sm hover:bg-sky-700">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#gift" className="  text-pink-500 text-sm hover:bg-sky-700">
                        Gift
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {navOpen && (
                <div className="fixed z-50 bottom-0 right-0 left-0 p-4 my-0 bg-darkgold  border lg:hidden">
                  <ul className="flex justify-between">
                    <li>
                      <a href="" className="flex justify-center flex-col items-center gap-1  hover:bg-gold">
                        <FontAwesomeIcon icon={faHome} className="text-white" />
                        <a className="text-white text-base">Home</a>
                      </a>
                    </li>
                    <li>
                      <a href="#waktu" className="flex justify-center flex-col items-center gap-1 hover:bg-gold">
                        <FontAwesomeIcon icon={faClock} className="text-white" />
                        <span className="text-white text-base text-bold">Waktu</span>
                      </a>
                    </li>
                    <li>
                      <a href="#map" className="flex justify-center flex-col items-center gap-1 hover:bg-gold">
                        <FontAwesomeIcon icon={faImages} className="text-white" />
                        <span className="text-white text-base text-bold">Map</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gift" className="flex justify-center flex-col items-center gap-1 hover:bg-gold">
                        <FontAwesomeIcon icon={faGift} className="text-white" />
                        <span className="text-white text-base text-bold">Gift</span>
                      </a>
                    </li>
                    <Link to="/">
                    <li  >
                      <a  className="flex justify-center flex-col items-center gap-1 hover:bg-gold">
                        <FontAwesomeIcon icon={faSignOut} className="text-white" />
                        <span className="text-white text-base text-bold">Out</span>
                      </a>
                    </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </nav>
    </>
  );
}

export default Nav;
