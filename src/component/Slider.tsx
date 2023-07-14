import useSwiperHook from "../hooks/useSwiperHook"

import Slide1 from "../assets/slider_1.jpg"
import Slide2 from "../assets/slider_2.jpg"
import Slide3 from "../assets/slider_3.jpg"
import SlideMb1 from "../assets/slidermb_1.jpg"
import SlideMb2 from "../assets/slidermb_2.jpg"
import SlideMb3 from "../assets/slidermb_3.jpg"


export default function Slider() {
  const {Swiper, SwiperSlide, Pagination } = useSwiperHook()

  return (
    <section className="slider">
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      >
          <SwiperSlide>
            <picture>
              <source media="(min-width:577px)" srcSet={Slide1} />
              <source media="(max-width:576px)" srcSet={SlideMb1} />
              <img src={Slide1} alt="Slide" />
            </picture>
          </SwiperSlide>
          <SwiperSlide >
            <picture>
              <source media="(min-width:577px)" srcSet={Slide2} />
              <source media="(max-width:576px)" srcSet={SlideMb2} />
              <img src={Slide2} alt="Slide" />
            </picture>
          </SwiperSlide >
          <SwiperSlide >
            <picture>
              <source media="(min-width:577px)" srcSet={Slide3} />
              <source media="(max-width:576px)" srcSet={SlideMb3} />
              <img src={Slide3} alt="Slide" />
            </picture>
          </SwiperSlide>
      </Swiper>
    </section>
  );
}
