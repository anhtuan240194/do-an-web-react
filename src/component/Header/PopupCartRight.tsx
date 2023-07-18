import Offcanvas from 'react-bootstrap/Offcanvas';

export default function PopupCartRight({show, handleClose}) {

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose} className="popup-cartright" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Giỏ hàng của bạn</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="cart_right_list p-3">
          <div
            className="cart_right_item mb-2 d-flex align-items-center"
            data-cart-id={1}
          >
            <div className="cart_item_img">
              <a href="product.html?ao-polo-dang-a-nhan-vay-suong-khong-co-qa24">
                <img
                  src="/image/productimage/1.jpg"
                  alt="Áo polo dáng A nhăn, váy suông không cổ QA24"
                />
              </a>
            </div>
            <div className="cart_item_info ps-2">
              <a
                href="/"
                className="cart_item_name mb-2 d-block"
              >
                Áo polo dáng A nhăn, váy suông không cổ QA24
              </a>
              <div className="cart_item_action d-flex justify-content-between">
                <div className="cart_item_quantity">
                  <span className="d-block">Số lượng</span>
                  <button className="quantity-reduce">-</button>
                  <input
                    className="cart_item_number_quantity text-center"
                    type="number"
                    defaultValue={1}
                  />
                  <button className="quantity-pluss">+</button>
                </div>
                <div className="cart_item_price p-2">
                  <span className="d-block fw-bold">
                    <strong className="price_item">250.000</strong>đ
                  </span>
                  <a className="cart_remove">Bỏ sản phẩm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart_right_buy p-3">
          <div className="cart_right_total pt-3 pb-3">
            <span>Tổng tiền:</span>
            <span className="total_price float-end">
              <strong>250.000đ</strong>
            </span>
          </div>
          <div className="cart_right_payment d-block">
            <button className="payment">
              <a href="/cart">THANH TOÁN</a>
            </button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
