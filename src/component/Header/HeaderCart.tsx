
import IconCart from "../../assets/cart.svg";

export default function HeaderCart({onclick}) {
  return (
    <div className="header_cart" onClick={onclick}>
      <div className="header_cart_icon position-relative">
        <img src={IconCart} alt="Giỏ hàng" />
        <span className="header_cart_count position-absolute text-center">
          0
        </span>
      </div>
    </div>
  );
}
