
export default function HeaderMenu() {
  return (
    <div className="header_menu">
      <nav>
        <ul className="menu_list ps-0">
          <li className="lv0">
            <a href="/">Trang chủ</a>
          </li>
          <li className="lv0">
            <a href="/collections">Khuyến mãi sốc</a>
          </li>
          <li className="lv0 lv_mega">
            <a href="/collections">Sản phẩm</a>
            <ul className="header_menu_sub mega_menu position-absolute">
              <div className="main_mega_menu">
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Đầm thiết kế
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Mẫu đầm mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Đầm dự tiệc</a>
                    </li>
                    <li>
                      <a href="/collections">Đầm cô dâu chạy bàn</a>
                    </li>
                    <li>
                      <a href="/collections">Đầm mùa hè</a>
                    </li>
                    <li>
                      <a href="/collections">Đầm mùa đông</a>
                    </li>
                  </ul>
                </li>
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Vest
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Mẫu vest mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Vest mùa hè</a>
                    </li>
                    <li>
                      <a href="/collections">Vest mùa đông</a>
                    </li>
                  </ul>
                </li>
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Áo
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Mẫu áo mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Áo sơ mi</a>
                    </li>
                    <li>
                      <a href="/collections">Áo phông</a>
                    </li>
                    <li>
                      <a href="/collections">Áo thun - Polo</a>
                    </li>
                  </ul>
                </li>
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Quần
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Mẫu quần mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Quần vải</a>
                    </li>
                    <li>
                      <a href="/collections">Quần jean</a>
                    </li>
                    <li>
                      <a href="/collections">Quần short</a>
                    </li>
                    <li>
                      <a href="/collections">Quần dài</a>
                    </li>
                  </ul>
                </li>
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Đồ ngủ
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Bộ đồ ngủ mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Bộ ngủ mặc nhà</a>
                    </li>
                    <li>
                      <a href="/collections">Đồ ngủ sexy</a>
                    </li>
                    <li>
                      <a href="/collections">Đồ ngủ cosplay</a>
                    </li>
                    <li>
                      <a href="/collections">Đồ ngủ cute</a>
                    </li>
                  </ul>
                </li>
                <li className="lv1">
                  <a className="mega_title_col" href="/collections">
                    Đồ lót
                  </a>
                  <ul className="mega_menu_col">
                    <li>
                      <a href="/collections">Mẫu đồ lót mới nhất</a>
                    </li>
                    <li>
                      <a href="/collections">Áo ngực</a>
                    </li>
                    <li>
                      <a href="/collections">Quần lót</a>
                    </li>
                    <li>
                      <a href="/collections">Set đồ lót</a>
                    </li>
                    <li>
                      <a href="/collections">Đồ lót cute</a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="lv0">
            <a href="/">
              Chính sách
            </a>
            <ul className="header_menu_sub">
              <li className="lv1">
                <a href="/serviceloyalty.html">Chính sách mua sỉ</a>
              </li>
              <li className="lv1">
                <a href="/servicereturn.html">Chính sách đổi trả</a>
              </li>
              <li className="lv1">
                <a href="/servicepayment.html">Chính sách thanh toán</a>
              </li>
            </ul>
          </li>
          <li className="lv0">
            <a href="/">
              Hướng dẫn
            </a>
            <ul className="header_menu_sub">
              <li className="lv1">
                <a href="/pageagent.html">Hướng dẫn đăng ký sỉ</a>
              </li>
              <li className="lv1">
                <a href="/shoppingguide.html">Hướng dẫn mua hàng</a>
              </li>
              <li className="lv1">
                <a href="/methodpayment.html">Phương thức thanh toán</a>
              </li>
            </ul>
          </li>
          <li className="lv0">
            <a href="/contact">Liên hệ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
