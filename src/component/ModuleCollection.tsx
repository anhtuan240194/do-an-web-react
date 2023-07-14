import useSwiperHook from "../hooks/useSwiperHook";

import CollectionImg1 from "../assets/season_coll_1_img.png";
import CollectionImg2 from "../assets/season_coll_2_img.png";
import CollectionImg3 from "../assets/season_coll_3_img.png";
import CollectionImg4 from "../assets/season_coll_4_img.png";
import CollectionImg5 from "../assets/season_coll_5_img.png";
import CollectionImg6 from "../assets/season_coll_6_img.png";
import CollectionImg7 from "../assets/season_coll_7_img.png";
import CollectionImg8 from "../assets/season_coll_8_img.png";

export default function ModuleCollection() {
  const {Swiper, SwiperSlide, Navigation} = useSwiperHook()
  const breakpoint = {
    320: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView:5
    },
    1200 : {
      slidesPerView: 8
    }
  }
  return (
    <section className="collections">
      <div className="container">
        <Swiper
        modules={[Navigation]}
        spaceBetween={10} slidesPerView={8}
        breakpoints={breakpoint}
        navigation
        >
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg1} alt="Đầm thiết kế" />
                <h4>Đầm thiết kế</h4>
                <span className="d-block">14 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg6} alt="Áo sơ mi" />
                <h4>Áo sơ mi</h4>
                <span className="d-block">105 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg2} alt="Áo thun - Polo" />
                <h4>Áo thun - Polo</h4>
                <span className="d-block">98 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg8} alt="Quần jean" />
                <h4>Quần jean</h4>
                <span className="d-block">62 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg7} alt="Quần short" />
                <h4>Quần short</h4>
                <span className="d-block">78 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg5} alt="Bộ đồ ngủ" />
                <h4>Bộ đồ ngủ</h4>
                <span className="d-block">34 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg4} alt="Bikini" />
                <h4>Bikini</h4>
                <span className="d-block">52 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection_item">
              <a href="/collection.html" className="text-center">
                <img src={CollectionImg3} alt="Đồ lót" />
                <h4>Đồ lót</h4>
                <span className="d-block">54 sản phẩm</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
