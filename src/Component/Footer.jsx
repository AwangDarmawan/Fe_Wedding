
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="text-center mt-8 my-16 py-6 text-gray-700 dark:bg-gray-900  dark:text-darkgold dark:border-4 ">
          <h1 className="text-sm font-Montserrat font-semibold">Copy Right Awang Darmawan</h1>
          <a href="https://wa.me/083125307355" className='flex justify-center items-center gap-1 hover:text-green-500'><FaWhatsapp className=" text-2xl my-1"/>+6283125307355</a>
          <a href="https://instagram.com/awng_drmwn" className='flex justify-center items-center gap-1 hover:text-red-500'><FaInstagram className=" text-2xl my-1"/>--@awng_drmwn</a>
          </div>
        
    </>
  )
}

export default Footer
