import useSwiperHook from "../hooks/useSwiperHook";

import GiftBoxImg from "../assets/giftbox.gif"
import "../css/cart.css"

export default function Vouchercart() {
  const {Swiper, SwiperSlide, Pagination} = useSwiperHook()
  return (
    <div className="product_voucher rounded-2 p-3 position-relative mb-4">
      <div className="product_voucher_title position-absolute">
        <img src={GiftBoxImg} alt="Mã ưu đãi" />
        <span className="fw-bold">Mã ưu đãi</span>
      </div>
      <Swiper modules={[Pagination]} pagination={{clickable:true}}>
          <SwiperSlide className=" item_voucher mb-2 mt-2">
            <span className="d-block">
              Áp dụng mã <b>Tuli2023</b> để được giảm ngay 20k (áp dụng cho các
              đơn hàng trên 500k)
            </span>
            <div
              className="voucher_copy mt-2 d-inline-block"
              data-voucher="{20000}"
            >
              Áp dụng
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide item_voucher mt-2 mb-2 pb-3">
            <span className="d-block">
              Áp dụng mã <b>Tuli30k</b> để được giảm ngay 30k (áp dụng cho các
              đơn hàng trên 1000k)
            </span>
            <div
              className="voucher_copy mt-2 d-inline-block"
              data-voucher="{30000}"
            >
              Áp dụng
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide item_voucher mt-2 mb-2 pb-3">
            <span className="d-block">
              Áp dụng mã <b>Tuli50k</b> để được giảm ngay 50k (áp dụng cho các
              đơn hàng trên 1500k)
            </span>
            <div
              className="voucher_copy mt-2 d-inline-block"
              data-voucher="{50000}"
            >
              Áp dụng
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
