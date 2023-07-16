import ServiceCart from "./ServiceCart";

export default function PaymentCart() {  
  return (
    <div className="main_cart_order p-3 rounded-3">
      <div className="total_order">
        <div className="d-flex pt-2 pb-2 justify-content-between">
          <span>Tạm tính: </span>
          <span className="total_price fw-bold">
            <strong>0</strong>
          </span>
        </div>
      </div>
      <div className="discount_cart">
        <div className="d-flex pt-2 pb-2 justify-content-between">
          <span>Giảm giá: </span>
          <span className="discount">0đ</span>
        </div>
      </div>
      <div className="shipping_price">
        <div className="d-flex pt-2 pb-2 justify-content-between">
          <span>Phí vận chuyển: </span>
          <span className="shipprice">30.000đ</span>
        </div>
      </div>
      <div className="action_cart pt-2 mb-4">
        <div className="d-flex justify-content-between">
          <span>Tổng cộng: </span>
          <span className="final_price fw-bold">
            <strong>0</strong>
          </span>
        </div>
      </div>
      <button className="payment p-2 rounded-3 disabled-click" form="orderInfor">
        <a>BẠN CẦN ĐĂNG NHẬP</a>
      </button>
      <ServiceCart />
    </div>
  );
}
