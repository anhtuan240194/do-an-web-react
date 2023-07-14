
export default function SidebarCategory() {
  return (
    <div className="sidebar_category p-3 mb-3 rounded-3">
      <div className="sidebar_title fw-bold mb-3 position-relative">
        DANH MỤC SẢN PHẨM
        <div className="button_close position-absolute text-end d-block d-lg-none d-md-none">X</div>
      </div>
      <div className="navbar_mobile_body">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="nav_item">
            <a href="//collections">Khuyến mãi sốc</a>
          </li>
          <li className="nav_item">
            <a
              className="dropdown_nav_lv0 position-relative"
              href="/"
            >
              Sản phẩm
              <span className="collapse-plus position-absolute">+</span>
              <span className="collapse-reduce d-none position-absolute">
                -
              </span>
            </a>
            <ul className="nav_list_lv0 d-none">
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Đầm thiết kế
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu đầm mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đầm dự tiệc</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đầm cô dâu chạy bàn</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đầm mùa hè</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đầm mùa đông</a>
                  </li>
                </ul>
              </li>
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Vest
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu vest mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Vest mùa hè</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Vest mùa đông</a>
                  </li>
                </ul>
              </li>
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Áo
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu áo mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Áo sơ mi</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Áo phông</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Áo thun - Polo</a>
                  </li>
                </ul>
              </li>
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Quần
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu quần mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Quần vải</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Quần jean</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Quần short</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Quần dài</a>
                  </li>
                </ul>
              </li>
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Đồ ngủ
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu đồ ngủ mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Bộ ngủ mặc nhà</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đồ ngủ sexy</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đồ ngủ cosplay</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đồ ngủ cute</a>
                  </li>
                </ul>
              </li>
              <li className="nav_item nav_item_lv0">
                <a
                  className="dropdown_nav_lv1 position-relative"
                  href="//collections"
                >
                  Đồ lót
                  <span className="collapse-plus position-absolute">+</span>
                  <span className="collapse-reduce d-none position-absolute">
                    -
                  </span>
                </a>
                <ul className="nav_list_lv1 d-none">
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Mẫu đồ lót mới nhất</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Áo ngực</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Quần lót</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Set đồ lót</a>
                  </li>
                  <li className="nav_item nav_item_lv1">
                    <a href="//collections">Đồ lót cute</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <a
              className="dropdown_nav_lv0 position-relative"
              href="/"
            >
              Chính sách
              <span className=" collapse-plus position-absolute">+</span>
              <span className="collapse-reduce d-none position-absolute">
                -
              </span>
            </a>
            <ul className="nav_list_lv0 d-none">
              <li className="nav_item nav_item_lv0">
                <a href="/serviceloyalty.html">Chính sách mua sỉ</a>
              </li>
              <li className="nav_item nav_item_lv0">
                <a href="/servicereturn.html">Chính sách đổi trả</a>
              </li>
              <li className="nav_item nav_item_lv0">
                <a href="/servicepayment.html">Chính sách thanh toán</a>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <a
              className="dropdown_nav_lv0 position-relative"
              href="/"
            >
              Hướng dẫn
              <span className="collapse-plus position-absolute">+</span>
              <span className="collapse-reduce d-none position-absolute">
                -
              </span>
            </a>
            <ul className="nav_list_lv0 d-none">
              <li className="nav_item nav_item_lv0">
                <a href="/pageagent.html">Hướng dẫn đăng ký sỉ</a>
              </li>
              <li className="nav_item nav_item_lv0">
                <a href="/methodpayment.html">Hướng dẫn mua hàng</a>
              </li>
              <li className="nav_item nav_item_lv0">
                <a href="/methodpayment.html">Hướng dẫn thanh toán</a>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <a href="/pagecontact.html">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
