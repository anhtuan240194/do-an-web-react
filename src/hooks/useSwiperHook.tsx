import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import 'swiper/css';


export default function useSwiperHook() {
  return { Swiper, SwiperSlide , Navigation, Pagination };
}