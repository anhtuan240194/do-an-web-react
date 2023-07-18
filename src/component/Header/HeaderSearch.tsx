import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Offcanvas } from "react-bootstrap";
import LogoheaderImg from "../../assets/logo.png"
import IconUserImg from "../../assets/user.svg"
import IconSearchImg from "../../assets/search.svg"
import IconCartImg from "../../assets/cart.svg"

interface IHeaderSearch {
  show: boolean,
  onHide: () => void
}

export default function HeaderSearch(props: IHeaderSearch) {
  const {show, onHide} = props
  return (
    <>
      <Offcanvas placement="top" show={show} onHide={onHide} className="header_box_search">
        <Offcanvas.Body  className="p-0 header_box_search-body">
            <Container>
              <Row>
                <Col lg={3} md={3} className="d-none d-lg-block d-sm-block">
                  <div className="logo">
                    <a href="/">
                      <img src={LogoheaderImg} alt="Tuli design" />
                    </a>
                  </div>
                </Col>
                <Col lg={7} md={7} className="col-12 col-sm-6">
                  <div className="box_search">
                    <div className="box_search_input">
                      <input
                        type="text"
                        id="search_input"
                        placeholder="Nhập nội dung tìm kiếm"
                      />
                      <div className="button_search">
                        <img
                          className="header_right_search"
                          src={IconSearchImg}
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={2} sm={3} md={2} className=" d-none d-lg-block d-md-block">
                  <div className="header_right">
                    <div className="header_account position-relative d-inline">
                      <img src={IconUserImg} alt="Đăng nhập" />
                    </div>
                    <div className="header_cart d-flex">
                      <div className="header_cart_icon position-relative">
                        <img src={IconCartImg} alt="Giỏ hàng" />
                        <span className="header_cart_count position-absolute text-center">0</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
