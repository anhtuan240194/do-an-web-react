import IconPhoneImg from "../../assets/telephone-call.svg";

export default function BoxForgotPassword() {
    return (
        <div className="tab-pane fade">
        <div className="form_user form_forgot">
          <h3 className="mb-3 text-center">QUÊN MẬT KHẨU</h3>
          <form
            id="forgot"
            action="forgot"
            className="needs-validation"
            noValidate=""
          >
            <div className="line_input position-relative mb-2">
              <label htmlFor="phoneforgot">
                Nhập số điện thoại đăng ký
              </label>
              <input
                type="number"
                id="phoneforgot"
                className="form-control"
                required=""
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
          </form>
        </div>
      BoxRegister</div>
    )
}