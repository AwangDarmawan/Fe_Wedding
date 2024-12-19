import React from 'react'
import grup1 from "../assets/Img/png/group1.png"
import grup2 from "../assets/Img/png/group2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import wedding from "../assets/Img/png/hutan-pinus.png"

function Enam() {
  return (
    <>
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
            <p className="text-center text-sm text-gray-600 dark:text-darkgold mt-6 italic">
              “And among His verses is that He has created for you wives of your own kind, 
              so that you may feel comfortable in them, and He has made between you mawadah 
              and mercy. Verily in that are signs for the people who think” - AR-RUM 21
            </p>
          </div>
    </>
  )
}

export default Enam
