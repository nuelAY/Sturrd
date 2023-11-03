import React from "react";
import { CustomerCard, Profile, CarouselNav } from "../styledComponents/Carousel.styled";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { textAnimate } from "./animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={{
          prevEl: ".swiper-custom-navigation-prev",
          nextEl: ".swiper-custom-navigation-next",
        }}
        pagination={true}
        watchSlidesVisibility={true}
      >
        <SwiperSlide>
          <CustomerCard
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>
              Everyone loves Sturrd
            </motion.h1>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <Profile>
              <div className="text-section">
                <motion.p variants={textAnimate}>
                "I can't imagine my weekends without this app! It's like having all the coolest events in town at my fingertips. The recommendations are always on point, and I've made some amazing new friends through it."
                </motion.p>
              </div>
              <div className="image-section">
                <motion.h3 variants={textAnimate}>SARA</motion.h3>
              </div>
             
            </Profile>
          </CustomerCard>
        </SwiperSlide>
        
        <SwiperSlide>
          <CustomerCard
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>
              Game Changer
            </motion.h1>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <Profile>
              <div className="text-section">
                <motion.p variants={textAnimate}>
                  "This app is a game-changer! No more FOMO (Fear of Missing Out) for me. I've discovered so many underground concerts and art shows that I would have never found otherwise. Plus, the chat feature is a lifesaver for coordinating with my friends.."
                </motion.p>
              </div>
              <div className="image-section">
                <motion.h3 variants={textAnimate}>JOHN SMITH</motion.h3>
              </div>
             
            </Profile>
          </CustomerCard>
        </SwiperSlide>

        <SwiperSlide>
          <CustomerCard
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>
              Local Event Guru
            </motion.h1>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <Profile>
              <div className="text-section">
                <motion.p variants={textAnimate}>
                 "This app has made me a local event guru. I love the personalized event recommendations based on my interests and location. It's so easy to find events that match my vibe, whether it's a chill coffeehouse acoustic night or a wild dance party."
                </motion.p>
              </div>
              <div className="image-section">
                <motion.h3 variants={textAnimate}>EDWARD</motion.h3>
              </div>
             
            </Profile>
          </CustomerCard>
        </SwiperSlide>

        <SwiperSlide>
          <CustomerCard
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>
              Everyone loves Sturrd
            </motion.h1>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <Profile>
              <div className="text-section">
                <motion.p variants={textAnimate}>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </motion.p>
              </div>
              <div className="image-section">
                <motion.h3 variants={textAnimate}>NEWGATE</motion.h3>
              </div>
             
            </Profile>
          </CustomerCard>
        </SwiperSlide>
      </Swiper>
      <CarouselNav>
        <div className="swiper-custom-navigation swiper-custom-navigation-prev backNavigate">
          <BsArrowLeft />
        </div>
        <div className="swiper-custom-navigation swiper-custom-navigation-next frontNavigate">
          <BsArrowRight />
        </div>
      </CarouselNav>
    </>
  );
};


export default CustomerCarousel;
