import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Import the Coverflow effect CSS
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Import the Coverflow effect module

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subheading={"---From 11.00am to 10 pm---"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        effect="coverflow" // Apply the Coverflow effect
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2} // Default for mobile
        spaceBetween={5} // Reduced space between slides on mobile
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} // Enable infinite looping
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3, // 3 slides per view on tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // 4 slides per view on PCs
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, EffectCoverflow, Autoplay]} // Include the necessary modules
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="Category Photo" />
          <h3 className="md:text-4xl text-center uppercase -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Category Photo" />
          <h3 className="md:text-4xl text-center uppercase -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Category Photo" />
          <h3 className="md:text-4xl text-center uppercase -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Category Photo" />
          <h3 className="md:text-4xl text-center uppercase -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Category Photo" />
          <h3 className="md:text-4xl text-center uppercase -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
