import { Nav } from "react-bootstrap";


export default function HeaderMenu() {
  return (
    <div className="header_menu">
      <nav>
        <Nav className="menu_list ps-0 justify-content-center">
          <Nav.Item className="lv0">
            <Nav.Link href="/">Trang chủ</Nav.Link>
          </Nav.Item>
          <Nav.Item className="lv0">
            <Nav.Link href="/collections">Khuyến mãi sốc</Nav.Link>
          </Nav.Item>
          <Nav.Item className="lv0 lv_mega">
            <Nav.Link href="/collections">Sản phẩm</Nav.Link>
            <ul className="header_menu_sub mega_menu position-absolute">
              <Nav className="main_mega_menu">
                <Nav.Item className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Đầm thiết kế
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Mẫu đầm mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đầm dự tiệc</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đầm cô dâu chạy bàn</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đầm mùa hè</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đầm mùa đông</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item  className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Vest
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Mẫu vest mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <a href="/collections">Vest mùa hè</a>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Vest mùa đông</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Áo
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Mẫu áo mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Áo sơ mi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Áo phông</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Áo thun - Polo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Quần
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Mẫu quần mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Quần vải</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Quần jean</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Quần short</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Quần dài</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Đồ ngủ
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Bộ đồ ngủ mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Bộ ngủ mặc nhà</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đồ ngủ sexy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đồ ngủ cosplay</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đồ ngủ cute</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item className="lv1">
                  <Nav.Link className="mega_title_col" href="/collections">
                    Đồ lót
                  </Nav.Link>
                  <Nav className="mega_menu_col">
                    <Nav.Item>
                      <Nav.Link href="/collections">Mẫu đồ lót mới nhất</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Áo ngực</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Quần lót</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Set đồ lót</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/collections">Đồ lót cute</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
              </Nav>
            </ul>
          </Nav.Item>
          <Nav.Item className="lv0">
            <Nav.Link href="/">
              Chính sách
            </Nav.Link>
            <Nav className="header_menu_sub">
              <Nav.Item className="lv1">
                <Nav.Link href="/serviceloyalty.html">Chính sách mua sỉ</Nav.Link>
              </Nav.Item>
              <Nav.Item className="lv1">
                <Nav.Link href="/servicereturn.html">Chính sách đổi trả</Nav.Link>
              </Nav.Item>
              <Nav.Item className="lv1">
                <Nav.Link href="/servicepayment.html">Chính sách thanh toán</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
          <Nav.Item className="lv0">
            <Nav.Link href="/">
              Hướng dẫn
            </Nav.Link>
            <Nav className="header_menu_sub">
              <Nav.Item className="lv1">
                <Nav.Link href="/pageagent.html">Hướng dẫn đăng ký sỉ</Nav.Link>
              </Nav.Item>
              <Nav.Item className="lv1">
                <Nav.Link href="/shoppingguide.html">Hướng dẫn mua hàng</Nav.Link>
              </Nav.Item>
              <Nav.Item className="lv1">
                <Nav.Link href="/methodpayment.html">Phương thức thanh toán</Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
          <Nav.Item className="lv0">
            <Nav.Link href="/contact">Liên hệ</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </div>
  );
}
