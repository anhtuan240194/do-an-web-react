import LogoFooter from "../assets/logo-footer.png"
import FanpageFooterImg from "../assets/fanpage-footer.png"
import IconFanpageImg from "../assets/facebook.svg"
import IconInstagramImg from "../assets/instagram.svg"
import IconShopeeImg from "../assets/shopee.png"
import IconTiktokImg from "../assets/tiktok.svg"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-3 col-sm-6">
            <div className="logo_footer text-center">
              <img src={LogoFooter} alt="Tuli design" />
            </div>
            <ul className="list_footer">
              <li>
                <b>Địa chỉ: </b>Tòa S2.16 KĐT Ocean Park, Gia Lâm, Hà Nội
              </li>
              <li>
                <b>Điện thoại: </b>
                <a href="tel:0363794451">0363 794 451</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-6">
            <h4 className="title_footer">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="list_footer">
              <li>
                <a href="/service">Hướng dẫn thanh toán</a>
              </li>
              <li>
                <a href="/service">Hướng dẫn đặt hàng</a>
              </li>
              <li>
                <a href="/service">Điều kiện mua sỉ</a>
              </li>
              <li>
                <a href="/contact">Hệ thống cửa hàng</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-6">
            <h4 className="title_footer">DỊCH VỤ KHÁCH HÀNG</h4>
            <ul className="list_footer">
              <li>
                <a href="/service">Chính sách đổi trả</a>
              </li>
              <li>
                <a href="/service">Chính sách thanh toán</a>
              </li>
              <li>
                <a href="/service">Chính sách mua sỉ</a>
              </li>
              <li>
                <a href="/service">Chính sách vận chuyển</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-6">
            <h4 className="title_footer">KẾT NỐI VỚI TULI DESIGN</h4>
            <div className="fanpage_footer">
              <a target="blank" href="https://www.facebook.com/tuli.design.bn/">
                <img src={FanpageFooterImg} alt="Facebook" />
              </a>
            </div>
            <ul className="list_social">
              <li>
                <a
                  target="blank"
                  href="https://www.facebook.com/tuli.design.bn/"
                >
                  <img src={IconFanpageImg} alt="Facebook" />
                </a>
              </li>
              <li>
                <a target="blank">
                  <img src={IconInstagramImg} alt="Instagram" />
                </a>
              </li>
              <li>
                <a target="blank" href="shp.ee/j8ebbjb">
                  <img src={IconShopeeImg} alt="Shopee" />
                </a>
              </li>
              <li>
                <a target="blank">
                  <img src={IconTiktokImg} alt="Tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom text-center">
        <span>@ Bản quyền website thuộc về Tuli design</span>
      </div>
    </footer>
  );
}
