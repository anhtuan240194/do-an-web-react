import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";

import ButtonMenu from "../../assets/menu.svg";
import IconProfile from "../../assets/profile.svg";
import IconCallCenter from "../../assets/call-center.svg";
import IconBubbleChat from "../../assets/bubble-chat.svg";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

import {useContextLogin} from "../../hooks/useContextLogin.jsx"


export default function NavMobile() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {useContextLogin, useContextLogout} = useContextLogin()

  return (
    <nav className="navbar_mobile">
      <button className="navbar-button" onClick={handleShow}>
        <img className="menu_mb_button" src={ButtonMenu} alt="Tuli design" />
      </button>

      <Offcanvas width="80vw" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="nav_account gap-3 d-flex align-items-center">
              <img src={IconProfile} alt="Tài khoản" />
              <div className="account_info">
                <p className="user_register_mb d-none">Đăng ký</p>
                <p className="user_login_mb d-block d-none">Đăng nhập</p>
                <p className="user_name_mb">Tên khách</p>
                <p className="user_logout_mb"
                onClick={useContextLogin}
                >Đăng xuất</p>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="navbar_mobile_body">
            <ul className="nav_list p-3">
              <li className="nav_item">
                <a href="/index.html">Trang chủ</a>
              </li>
              <li className="nav_item">
                <a href="/collections">Khuyến mãi sốc</a>
              </li>
              <li className="nav_item">
                <Accordion className={"dropdown_nav_lv0"}>
                  <AccordionHeader>Sản phẩm</AccordionHeader>
                  <AccordionBody>
                    <ul className="nav_list_lv0">
                      <li className="nav_item nav_item_lv0">
                        <Accordion className={"dropdown_nav_lv1"}>
                          <AccordionHeader>Đầm thiết kế</AccordionHeader>
                          <AccordionBody>
                            <ul className="nav_list_lv1">
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Mẫu đầm mới nhất</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Đầm dự tiệc</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Đầm cô dâu chạy bàn</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Đầm mùa hè</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Đầm mùa đông</a>
                              </li>
                            </ul>
                          </AccordionBody>
                        </Accordion>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <Accordion className="dropdown_nav_lv1">
                          <AccordionHeader> Vest</AccordionHeader>
                          <AccordionBody>
                            <ul className="nav_list_lv1">
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Mẫu vest mới nhất</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Vest mùa hè</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Vest mùa đông</a>
                              </li>
                            </ul>
                          </AccordionBody>
                        </Accordion>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <Accordion className="dropdown_nav_lv1">
                          <AccordionHeader>Áo</AccordionHeader>
                          <AccordionBody>
                            <ul className="nav_list_lv1">
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Mẫu áo mới nhất</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Áo sơ mi</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Áo phông</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Áo thun - Polo</a>
                              </li>
                            </ul>
                          </AccordionBody>
                        </Accordion>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <Accordion className="dropdown_nav_lv1">
                          <AccordionHeader>Quần</AccordionHeader>
                        
                        <AccordionBody>
                        <ul className="nav_list_lv1">
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Mẫu quần mới nhất</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Quần vải</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Quần jean</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Quần short</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Quần dài</a>
                          </li>
                        </ul>
                        </AccordionBody>
                        </Accordion>
                      </li>
                      <li className="nav_item nav_item_lv0">
                      <Accordion className="dropdown_nav_lv1">
                          <AccordionHeader>Đồ ngủ</AccordionHeader>
                        
                        <AccordionBody>
                        <ul className="nav_list_lv1">
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Mẫu đồ ngủ mới nhất</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Bộ ngủ mặc nhà</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Đồ ngủ sexy</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Đồ ngủ cosplay</a>
                          </li>
                          <li className="nav_item nav_item_lv1">
                            <a href="/collections">Đồ ngủ cute</a>
                          </li>
                        </ul>
                        </AccordionBody>
                        </Accordion>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <Accordion className="dropdown_nav_lv1">
                          <AccordionHeader>Đồ lót</AccordionHeader>
                          <AccordionBody>
                            <ul className="nav_list_lv1">
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Mẫu đồ lót mới nhất</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Áo ngực</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Quần lót</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Set đồ lót</a>
                              </li>
                              <li className="nav_item nav_item_lv1">
                                <a href="/collections">Đồ lót cute</a>
                              </li>
                            </ul>
                          </AccordionBody>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </li>
              <li className="nav_item">
                <Accordion className={"dropdown_nav_lv0"}>
                  <Accordion.Header>Chính sách</Accordion.Header>
                  <Accordion.Body>
                    <ul className="nav_list_lv0">
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Chính sách mua sỉ</a>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Chính sách đổi trả</a>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Chính sách thanh toán</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion>
              </li>
              <li className="nav_item">
                <Accordion className={"dropdown_nav_lv0"}>
                  <AccordionHeader>Hướng dẫn</AccordionHeader>
                  <AccordionBody>
                    <ul className="nav_list_lv0">
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Hướng dẫn đăng ký sỉ</a>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Hướng dẫn mua hàng</a>
                      </li>
                      <li className="nav_item nav_item_lv0">
                        <a href="/service">Hướng dẫn thanh toán</a>
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </li>
              <li className="nav_item">
                <a href="/contact">Liên hệ</a>
              </li>
            </ul>
          </div>

          <div className="navbar_mobile_support d-flex">
            <a
              href="tel:0363794451"
              className="support_hotline text-center p-2"
            >
              Gọi điện <img src={IconCallCenter} alt="Gọi điện" />
            </a>
            <a
              href="https://zalo.me/0363794451"
              className="support_messenger text-center p-2"
            >
              Nhắn tin <img src={IconBubbleChat} alt="Nhắn tin" />
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}
