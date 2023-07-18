import { Col, Row } from "react-bootstrap"

import BannerLoginImg from "../../assets/banner_user.jpg"
import IconPhoneImg from "../../assets/telephone-call.svg"
import IconPasswordImg from "../../assets/padlock.svg"

export default function HeaderBoxLogin() {
  return (
    <div className="box_account position-fixed">
      <div className="box_account_main">
        <Row>
          <Col xs={12} xl={7} lg={6} md={6} sm={12}>
            <img
              className="box_account_img"
              src={BannerLoginImg}
              alt="Tài khoản"
            />
          </Col>
          <Col xs={12} xl={5} lg={6} md={6} sm={12}>
            <div className="box_account_infor p-4 position-relative">
            <>
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        Home
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        Profile
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="pills-contact-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-contact"
        type="button"
        role="tab"
        aria-controls="pills-contact"
        aria-selected="false"
      >
        Contact
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="pills-disabled-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-disabled"
        type="button"
        role="tab"
        aria-controls="pills-disabled"
        aria-selected="false"
        disabled=""
      >
        Disabled
      </button>
    </li>
  </ul>
  <div className="tab-content" id="pills-tabContent">
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
      tabIndex={0}
    >
      ...
    </div>
    <div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
      tabIndex={0}
    >
      ...
    </div>
    <div
      className="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
      tabIndex={0}
    >
      ...
    </div>
    <div
      className="tab-pane fade"
      id="pills-disabled"
      role="tabpanel"
      aria-labelledby="pills-disabled-tab"
      tabIndex={0}
    >
      ...
    </div>
  </div>
</>

              <div className="close_account d-block text-center fw-bold position-absolute">
                x
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="box_account_success p-3 d-none">
        <div className="succsess-container text-center">
          <img src="/image/success.png" alt="Đăng ký thành công" />
          <p className="slogan_success mt-3 mb-2">
            Chúc mừng bạn đã đăng ký tài khoản thành công
          </p>
          <p className="success_norti mb-3">
            Tài khoản bạn đăng ký chưa thể sử dụng ngay bây giờ, chúng tôi sẽ xác
            minh và xét duyệt tài khoản mua hàng của bạn nếu đã đủ điều kiện
          </p>
          <div className="text-center">
            <span className="succes_ok d-block">OK</span>
          </div>
        </div>
      </div>
      <div className="box_login_success p-3 d-none position-relative">
        <div className="succsess-container text-center">
          <img src="/image/login-success.png" alt="Đăng nhập thành công" />
          <p className="slogan_login_success mt-3 mb-2">Đăng nhập thành công</p>
        </div>
      </div>
    </div>

  )
}