import ViewImage from "../assets/view.svg";
import FlashSaleIconImg from "../assets/hotsale.gif";
import IconCartItemProduct from "../assets/cart.svg";

interface Product {
  id: number;
  name: string;
  type: string;
  sku: string;
  price: number;
  oldprice: number;
  quantity: number;
  sold: number;
  variant: object;
  collections: Array<string>;
  image: Array<string>;
}

export default function ItemProduct({ product } : {product:Product}) {
  return (
    <div className="product_item" data-product-id={product.id}>
      <div className="product_item_img position-relative d-block">
        <a
          className="product_img d-block"
          href="/product.html?ao-polo-dang-a-nhan-vay-suong-khong-co-qa24"
        >
          <img
            src={"https://json-sever-do-an-web-react.onrender.com/" + product.image[0]}
            alt={product.name}
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
        {product.name}
        </div>
        <div className="item_pricebox">
          <div className="item_price">{product.price}đ</div>
          <div className="old_price">{product.oldprice}đ</div>
        </div>
        <div className="heart_sale">
          <div className="heart_sale_info position-relative">
            <img alt="Tuli design" src={FlashSaleIconImg} />
            <span>
              Đã bán <b className="sale_sold">{product.sold}</b>
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
