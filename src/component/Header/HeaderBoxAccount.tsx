import BoxLogin from "./BoxLogin"
import BoxRegister from "./BoxRegister"
import BoxForgotPassword from "./BoxForgotPassword"

import { Col, Row } from "react-bootstrap";

import BannerLoginImg from "../../assets/banner_user.jpg";
import IconPhoneImg from "../../assets/telephone-call.svg";
import IconPasswordImg from "../../assets/padlock.svg";

import { useState } from "react";

interface IFormLogin {
  phone: number | null;
  password: string;
}

export default function HeaderBoxAccount() {
  const [stateLogin, setStateLogin] = useState<IFormLogin>({
    phone: null,
    password:""
  })
  const onChangeLogin = (e) => {
    setStateLogin({
      ...stateLogin,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(stateLogin);
    setStateLogin({
      phone: null,
      password:""
    })
  }
  return (
    <div className="box_account position-fixed">
      <div className="box_account_main">
        <div className="row">
          <Col xs={12} xl={7} lg={6} md={6} sm={12}>
            <img
              className="box_account_img"
              src={BannerLoginImg}
              alt="Tài khoản"
            />
          </Col>
          <div className="col-12 col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <div className="box_account_infor p-4 position-relative">
              <div className="tab-content">
                <BoxLogin/>
                <BoxRegister/>
                <BoxForgotPassword/>
              </div>
              <div className="close_account d-block text-center fw-bold position-absolute">
                x
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
