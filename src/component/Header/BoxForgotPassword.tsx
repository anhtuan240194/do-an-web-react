import IconPhoneImg from "../../assets/telephone-call.svg";
import { useState } from "react";

export default function BoxForgotPassword({showBoxLogin, showBoxRegister}) {
  const [state, setState] = useState("")

  const handleChangeForgot = (e:React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
  const submitForgot = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
    return (
        <div className="form_user form_forgot">
          <h3 className="mb-3 text-center">QUÊN MẬT KHẨU</h3>
          <form
            id="forgot"
            action="forgot"
            className="needs-validation"
            onSubmit={submitForgot}
          >
            <div className="line_input position-relative mb-2">
              <input
                type="number"
                id="phoneforgot"
                className="form-control"
                placeholder="Nhập số điện thoại đăng ký"
                value={state}
                onChange={handleChangeForgot}
              />
              <img
                className="position-absolute"
                src={IconPhoneImg}
                alt="Số điện thoại"
              />
              <div className="invalid-feedback">
                Chưa nhập số điện thoại
              </div>
            </div>
            <button form="forgot" type="submit" className="forgot">
              LẤY LẠI MẬT KHẨU
            </button>
            <div className="register-title text-center mt-2 position-relative">
            Hoặc
          </div>
          <div className="d-flex justify-content-center action-forgot mt-2">
            <div className="login text-center"
            onClick={showBoxLogin}
            >Đăng nhập
            </div>
            <div className="register text-center"
            onClick={showBoxRegister}
            >
              Đăng ký
              </div>
          </div>
          </form>
      </div>
    )
}