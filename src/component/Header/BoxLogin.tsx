import { Col, Row } from "react-bootstrap";

import BannerLoginImg from "../../assets/banner_user.jpg";
import IconPhoneImg from "../../assets/telephone-call.svg";
import IconPasswordImg from "../../assets/padlock.svg";

import { useState } from "react";

interface IFormLogin {
  phone: number | null;
  password: string;
}

export default function BoxLogin() {
  const [stateLogin, setStateLogin] = useState<IFormLogin>({
    phone: null,
    password: "",
  });
  
  const onChangeLogin = (e: any) => {
    setStateLogin({
      ...stateLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    console.log(stateLogin);
    setStateLogin({
      phone: null,
      password: "",
    });
  };
  return (
    <div className="tab-pane active">
      <div className="form_user form_login">
        <h3 className="mb-3 text-center">ĐĂNG NHẬP</h3>
        <p className="summary_form_user text-center mb-3">
          Mua hàng với giá sỉ không giới hạn
        </p>
        <form action="login" id="formLogin" onSubmit={onSubmitLogin}>
          <div className="line_input position-relative mb-2">
            <input
              type="number"
              name="phone"
              placeholder="Số điện thoại"
              value={stateLogin.phone?.toString()}
              onChange={onChangeLogin}
            />
            <img
              className="position-absolute"
              src={IconPhoneImg}
              alt="Số điện thoại"
            />
          </div>
          <div className="line_input position-relative mb-2">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={stateLogin.password}
              onChange={onChangeLogin}
            />
            <img
              className="position-absolute"
              src={IconPasswordImg}
              alt="Mật khẩu"
            />
          </div>
          <div className="forgot_password d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="remember_pass">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Ghi nhớ</label>
            </div>
            <div className="forger">Quên mật khẩu?</div>
          </div>
          <button form="formLogin" type="submit" className="login">
            ĐĂNG NHẬP
          </button>
          <div className="register-title text-center mt-2">
            Hoặc đăng ký tại đây
          </div>
        </form>
      </div>
    </div>
  );
}
