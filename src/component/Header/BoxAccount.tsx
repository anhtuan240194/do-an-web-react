import BoxLogin from "./BoxLogin"
import BoxRegister from "./BoxRegister"
import BoxForgotPassword from "./BoxForgotPassword"

import { Col, Row } from "react-bootstrap";

import BannerLoginImg from "../../assets/banner_user.jpg";

import { useState } from "react";


export default function HeaderBoxAccount({showBoxAccount, handleCloseBoxAccount}) {
  const [stateLogin, setStateLogin] = useState(true)
  const [stateRegister, setStateRegister] = useState(false)
  const [stateForgot, setStateForgot] = useState(false)

  const showBoxRegister = () => {
    setStateLogin(false)
    setStateRegister(true)
    setStateForgot(false)
  }

  const showBoxLogin = () => { 
    setStateLogin(true)
    setStateRegister(false)
    setStateForgot(false)
  }

  const showBoxForgotPassword = () => {
    setStateLogin(false)
    setStateRegister(false)
    setStateForgot(true)
  }
  return (
    <div className={"box_account position-fixed " + (!showBoxAccount ? "d-none":"")}
    onClick={handleCloseBoxAccount}
    >
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
                {stateLogin && <BoxLogin showBoxRegister={showBoxRegister}
                 showBoxForgotPassword={showBoxForgotPassword}/>}
                {stateRegister && <BoxRegister showBoxLogin={showBoxLogin}/>}
                {stateForgot && <BoxForgotPassword 
                showBoxLogin={showBoxLogin} 
                showBoxRegister={showBoxRegister}
                />}
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
