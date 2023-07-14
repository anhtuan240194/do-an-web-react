import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import { Navigation } from 'swiper/modules';

import BannerCollection1 from "../../assets/banner_collection1.jpg"
import BannerCollection2 from "../../assets/banner_collection2.jpg"
import BannerCollection3 from "../../assets/banner_collection3.jpg"

export default function BannerCollections() {
    const breakpoint = {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
    return (
        <div className="border_box rounded-2 mb-3">
        {/* Slider main container */}
        <Swiper 
        slidesPerView={2} 
        spaceBetween={16} 
        breakpoints={breakpoint}
        modules={[Navigation]}
        navigation
        className="banner_collection"
        >
          {/* Additional required wrapper */}
            {/* Slides */}
            <SwiperSlide>
                <a href="/collections">
                  <img src={BannerCollection1} alt="Slide" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/collections">
                  <img src={BannerCollection2} alt="Slide" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/collections">
                  <img src={BannerCollection3} alt="Slide" />
                </a>
            </SwiperSlide>

        </Swiper>
      </div>
    )
}