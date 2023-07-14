export default function Voucher() {
  return (
    <div className="product_voucher rounded-2 p-3 position-relative">
      <div className="product_voucher_title position-absolute">
        <img src="image/giftbox.gif" alt="Mã ưu đãi" />
        <span className="fw-bold">Mã ưu đãi</span>
      </div>
      <div className="swiper swiper_voucher mt-2">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          <div className="swiper-slide item_voucher mb-2">
            <span className="d-block">
              Áp dụng mã <b>Tuli2023</b> để được giảm ngay 20k (áp dụng cho các
              đơn hàng trên 500k)
            </span>
            <div className="voucher_copy mt-2 d-inline-block">Sao chép</div>
          </div>
          <div className="swiper-slide item_voucher mb-2">
            <span className="d-block">
              Áp dụng mã <b>Tuli30k</b> để được giảm ngay 30k (áp dụng cho các
              đơn hàng trên 1000k)
            </span>
            <div className="voucher_copy mt-2 d-inline-block">Sao chép</div>
          </div>
          <div className="swiper-slide item_voucher mb-2">
            <span className="d-block">
              Áp dụng mã <b>Tuli50k</b> để được giảm ngay 50k (áp dụng cho các
              đơn hàng trên 1500k)
            </span>
            <div className="voucher_copy mt-2 d-inline-block">Sao chép</div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}
