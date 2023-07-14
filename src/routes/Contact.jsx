import BreadCrum from "../component/BreadCrum";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IconAddressImg from "../assets/address.svg";
import IconTelephoneImg from "../assets/telephone-call.svg"
import IconEmailImg from "../assets/email.svg"
import IconGoogleMapImg from "../assets/googlemap.png"

export default function Contact() {
  return (
    <>
      <div className="main_page">
        <Container>
          <div className="main_contact p-3 rounded-3">
            <Row>
              <Col xs={12}>
                <h1 className="mb-3 fw-bold">Liên hệ</h1>
              </Col>
              <Col xl={6} sm={12} xs={12}>
                <div className="contact_infor">
                  <ul>
                    <li className="mb-2">
                      <img src={IconAddressImg} alt="Địa chỉ" />
                      <b>Địa chỉ: </b>Tòa S2.16 KĐT Ocean Park, Gia Lâm, Hà Nội
                    </li>
                    <li className="mb-2">
                      <img src={IconTelephoneImg} alt="Hotline" />
                      <b>Hotline: </b>0363 794 451
                    </li>
                    <li className="mb-2">
                      <img src={IconEmailImg} alt="Email" />
                      <b> Email: </b>anhtuanvu241@gmail.com
                    </li>
                    <li className="mb-3">
                      <span>
                        Giấy chứng nhận Đăng ký Kinh doanh số 0363794xxx do Sở
                        Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 10/07/2022
                      </span>
                    </li>
                  </ul>
                  <form
                    action="contact"
                    id="contact"
                    className="needs-validation"
                    noValidate=""
                  >
                    <input
                      type="text"
                      id="nameContact"
                      className="form-control mb-2 rounded-2"
                      placeholder="Họ tên"
                      required=""
                    />
                    <input
                      type="mail"
                      id="mailContact"
                      className="form-control mb-2 rounded-2"
                      placeholder="Điện thoại*"
                      required=""
                    />
                    <textarea
                      type="text"
                      placeholder="Nội dung"
                      className="form-control rounded-2"
                      rows={3}
                      defaultValue={""}
                    />
                    <button
                      className="submit_contact p-2 rounded-2 mt-3"
                      type="submit"
                      form="contact"
                    >
                      Gửi thông tin
                    </button>
                  </form>
                </div>
              </Col>
              <Col xl={6} sm={12} xs={12}>
                <img src={IconGoogleMapImg} alt="Bản đồ liên hệ" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
