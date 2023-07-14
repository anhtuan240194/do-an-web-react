import ViewImage from "../assets/view.svg"
import FlashSaleIconImg from "../assets/hotsale.gif"
import IconCartItemProduct from "../assets/cart.svg"

export default function ItemProduct() {
  return (
    <div className="product_item" data-product-id={1}>
      <div className="product_item_img position-relative d-block">
        <a
          className="product_img d-block"
          href="/product.html?ao-polo-dang-a-nhan-vay-suong-khong-co-qa24"
        >
          <img
            src="/image/productimage/1.jpg"
            alt="Áo polo dáng A nhăn, váy suông không cổ QA24"
          />
        </a>
        <div className="product_item_action position-absolute">
          <div className="product_action product_item_view d-block">
            <img src={ViewImage} alt="Xem nhanh" />
          </div>
          <div className="product_action product_item_buy d-block">
            <img src={IconCartItemProduct} alt="Mua ngay" />
          </div>
        </div>
        <div className="tag_sale position-absolute">
          Giảm<span> 17%</span>
        </div>
      </div>
      <div className="product_item_info">
        <div className="product_name">
          Áo polo dáng A nhăn, váy suông không cổ QA24
        </div>
        <div className="item_pricebox">
          <div className="item_price">250.000đ</div>
          <div className="old_price">300.000đ</div>
        </div>
        <div className="heart_sale">
          <div className="heart_sale_info position-relative">
            <img alt="Tuli design" src={FlashSaleIconImg} />
            <span>
              Đã bán <b className="sale_sold">135</b>
              <div className="sale_sold_sp">sản phẩm</div>
            </span>
            <div
              className="heart_sale_sold position-absolute"
              style={{ width: "77%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
