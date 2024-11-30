
import React, { useState, useEffect } from "react";
import wedding from "../assets/Img/png/hutan-pinus.png"
import pria from "../assets/Img/png/pria.png" 
import wanita from "../assets/Img/png/wanita.png"
import wed from "../assets/Img/png/W1.png"
import wed2 from "../assets/Img/png/w2.png"
import grup1 from "../assets/Img/png/group1.png"
import grup2 from "../assets/Img/png/group2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faImages, faGift, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Toggle from "../assets/Img/png/Toogle.svg";
import { Link } from 'react-router-dom';




const w1 = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  // Simpan preferensi pengguna ke localStorage
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


  const [navOpen, setNavOpen] = useState(true);
   // Set target date for wedding
   const targetDate = new Date("2025-02-03T00:00:00").getTime(); 

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
    {/* nav */}
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <section>
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
                  <a href="#home" className="text-pink-500 hover:text-pink-600">
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
                  <a href="#home" className="flex justify-center flex-col items-center gap-1  hover:bg-gold">
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
                <li>
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
    </section>
    <section>
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
    </section>

{/* section2 */}
    <section id="home">
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
   </section>


{/* section3 */}
  <div className="bg-putih min-h-screen py-8 px-4  dark:bg-gray-900">
  {/* Header */}
  <div className="text-center mb-8">
    <h1 className="text-3xl font-semibold text-black font-Montserra dark:text-darkgold">We’re Getting Married</h1>
    <p className="text-sm text-black mt-2 font-Montserrat dark:text-neutral-600">Jl.Kp.Halimun Rt003 Rw 004  </p>
    <p className="text-md text-neutral-600 mt-2 font-Montserrat">03 February 2025</p>
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

  <section>
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
  </section>


  {/* Map Section */}
  <section >
  <div className="mb-8">
    <h2 className="text-center text-gold font-bold text-xl font-Montserrat">Location</h2>
    <div className="mt-4">
      <iframe
        title="Wedding Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.9524050652697!2d107.2317632!3d-6.7095483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697f98b737b11d%3A0xe5b7d50ad6c799b1!2zNsKwNDInMzQuNiwgMTA3JzA2JzU3Ljc3fQ!5e0!3m2!1sid!2sid!4v1699411262993!5m2!1sid!2sid."
        className="w-full h-64 rounded-lg"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  </section>
  {/* Footer */}
  <div className="text-center mt-8">
    <p className="text-gold text-sm">We are so excited to share our special day with you!</p>
  </div>
</div>

 {/* Gallery */}
 <section id="map">
<div className="bg-slate-50 py-10 dark:bg-slate-900 dark:border-4">
      <h2 className="text-center text-2xl font-bold text-gold mb-8 font-Montserrat">Gallery</h2>
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {/* Slide Images */}
          <SwiperSlide>
            <img
              src={wedding}
              alt="Wedding 1"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={grup1}
              alt="Wedding 2"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={grup2}
              alt="Wedding 3"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={wedding}
              alt="Wedding 4"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="text-center text-sm text-gray-600  mt-6 italic">
        “And among His verses is that He has created for you wives of your own kind, 
        so that you may feel comfortable in them, and He has made between you mawadah 
        and mercy. Verily in that are signs for the people who think” - AR-RUM 21
      </p>
    </div>
    </section>
  <section id="gift">
    {/* bayar */}
    <div className="flex flex-col items-center px-4 py-8 lg:px-20 bg-white dark:bg-slate-900">
  <h2 className="text-gold  text-2xl font-bold mb-4 font-Montserrat">Give a Gift</h2>
  <p className="text-gray-600 text-center mb-8 font-Montserrat">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, ipsum erat pretium.
  </p>

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full max-w-5xl">
    {/* <!-- Digital Wallet Section --> */}
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-gold font-Montserrat text-xl font-semibold mb-4">Digital Wallet</h3>
      <div className="space-y-4">
        {/* <!-- Account 1 --> */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div>
            <p className="text-gray-700 font-semibold font-Montserrat">Reja Jafar</p>
            <p className="text-gray-700 dark:text-gold font-Montserrat font-semibold text-sm">009 - 0222 2444 21</p>
          </div>
          {/* <button class="text-pink-600">
            <i className="bi bi-clipboard"></i>
          </button> */}
        </div>
        {/* <!-- Account 2 --> */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div>
            <p className="text-gray-700  font-semibold font-Montserrat ">Evi Amanda</p>
            <p className="text-sm text-gray-700  dark:text-gold font-Montserrat font-semibold ">009 - 0222 2444 21</p>
          </div>
          {/* <button class="text-pink-600">
            <i className="bi bi-clipboard"></i>
          </button> */}
        </div>
      </div>
    </div>

    {/* <!-- Offline Gift Section --> */}
    <div className="bg-white shadow-md p-6 rounded-lg dark:bg-slate-900 ">
      <h3 className="text-gold text-xl font-semibold mb-4">Offline Gift</h3>
      <p className="text-gray-700 font-semibold dark:text-darkgold mb-4 font-Montserrat">
        Jl. Kp.Halimun RT 003 RW 004 Desa.Warudoyong Kecamatan Cikalongkulon
      </p>
      <button className="bg-darkgold text-white px-4 py-2 rounded-lg font-Montserrat">
        <i className="bi bi-geo-alt"></i> Open Map
      </button>
    </div>
  </div>
</div>

</section>
  
<section className="bg-slate-50 py-10 px-4 lg:px-20 dark:bg-gray-900 dark:border-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gold text-center mb-6 font-Montserrat">
          Say Something!
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              *Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700  mb-2">
              *Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Attendance Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700  mb-2">
              *Attendance
            </label>
            <div className="flex justify-between">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="maybe"
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">Maybe</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  className="form-radio text-pink-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-darkgold text-white px-6 py-2 rounded-lg shadow-md hover:bg-gold transition duration-300 font-Montserrat"
            >
              Send Now!
            </button>
          </div>
        </form>

        {/* Message List */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gold mb-4">Messages</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700 ">Mass Abo</p>
                <p className="text-sm text-gray-500">Congrats!</p>
              </div>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                Attend
              </span>
            </li>
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700 ">Muthia Rahma</p>
                <p className="text-sm text-gray-500">Happy wedding my sistaa!</p>
              </div>
              <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
                Maybe
              </span>
            </li>
            <li className="flex items-center justify-between bg-pink-50 px-4 py-3 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-700 ">Alia Sena P</p>
                <p className="text-sm text-gray-500">Congrats!</p>
              </div>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                Attend
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section >
    <div className='container flex justify-center items-center  max-w-full  my-20'>
  <div className=" mx-auto flex  justify-center items-center">
    <img src={wedding} alt="wedding" className="opacity-50" />
    <h1 className="font-bold font-Allura text-white text-5xl absolute  ">Reja & Evi</h1>
  </div>
  </div>
</section>

<div className="text-center mt-8 my-16 py-6 text-gray-700 dark:bg-gray-900  dark:text-darkgold dark:border-4 ">
    <h1 className="text-sm font-Montserrat font-semibold">Copy Right Awang Darmawan</h1>
    <div className=''>
    <a href="https://wa.me/083125307355" className='flex justify-center items-center gap-1 hover:text-green-500'><FaWhatsapp className=" text-2xl my-1"/>+6283125307355</a>
    <a href="https://instagram.com/awng_drmwn" className='flex justify-center items-center gap-1 hover:text-red-500'><FaInstagram className=" text-2xl my-1"/>--@awng_drmwn</a>
    </div>
  </div>
  </div>
    </>


        
  )
}

export default w1

