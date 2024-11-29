import React, { useState } from "react";

import Toggle from "../assets/Img/png/Toogle.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <>
    <nav className="py-4 px-20 fixed  w-full ">
      <div className="container  ">
        <div className="flex items-center justify-between">
            <div className="flex flex-row-reverse gap-3 ">
                
                <span className="my-auto font-bold  text-white text-lg ">Wedding Invitation </span>
            </div>
          
          <img
            onClick={() => setNavOpen(!navOpen)}
            src={Toggle}
            alt=""
            className="order-2 sm:order-1 lg:hidden filter invert brightness-2 bg-white"
          />
          <div className="order-2 hidden lg:block">
            <ul className="flex gap-16">
              <li>
                <a href="" className="text-white  text-sm hover:  hover:bg-sky-700 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#Skills" className="text-white  text-sm hover:bg-sky-700  ">
                  waktu 
                </a>
              </li>
              <li>
                <a href="" className="text-white   text-sm hover: hover:bg-sky-700  ">
                  Map
                </a>
              </li>
              <li>
                <a href="" className="text-white  text-sm hover: hover:bg-sky-700  ">
                 Gift
                </a>
              </li>
            </ul>
          </div>
         
        </div>
        {navOpen && (
          <div
            className="fixed z-50 bottom-0 right-0 left-0 p-4 my-0 bg-blue-600 border lg:hidden "
          >
            <ul className="flex justify-between">
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700 ">
                <FontAwesomeIcon icon={faHome}  className="text-white"/> 
                  <a className=" text-white text-base ">Home</a>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                  <span className="text-white text-base text-bold">Waktu</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faBriefcase} className="text-white" /> 
                  <span className="text-white text-base text-bold">Map</span>
                </button>
              </li>
              <li>
                <button className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-white"/> 
                  <span className="text-white text-base text-bold">Gift</span>
                </button>
              </li>
              
            </ul>
           
          </div>
        )}
      </div>
    </nav>
    </>
  );
}

export default Nav;
