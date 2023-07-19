import IconPhoneImg from "../../assets/telephone-call.svg";
import IconPasswordImg from "../../assets/padlock.svg";

export default function BoxRegister() {
    return (
        <div className="tab-pane fade">
        <div className="form_user form_register">
          <h3 className="mb-3 text-center">ĐĂNG KÝ</h3>
          <p className="summary_form_user text-center mb-3">
            Để có thể mua hàng tại website của Tuli Design
          </p>
          <form
            id="register"
            action="register"
            className="needs-validation"
            noValidate=""
          >
            <div className="line_input position-relative mb-2">
              <input
                type="text"
                id="nameuserregister"
                placeholder="Họ tên"
                className="form-control"
                required=""
              />
              <img
                className="position-absolute"
                src="image/user.svg"
                alt="Họ tên"
              />
            </div>
            <div className="line_input position-relative mb-2">
              <input
                type="text"
                id="linkshop"
                placeholder="Link bán hàng"
                className="form-control"
                required=""
              />
              <img
                className="position-absolute"
                src="image/link.svg"
                alt="Link bán hàng"
              />
            </div>
            <div className="line_input position-relative mb-2">
              <input
                type="number"
                id="phoneregister"
                placeholder="Số điện thoại"
                className="form-control"
                required=""
              />
              <img
                className="position-absolute"
                src={IconPhoneImg}
                alt="Số điện thoại"
              />
            </div>
            <div className="line_input position-relative mb-4">
              <input
                type="password"
                id="passwordregister"
                placeholder="Mật khẩu"
                className="form-control"
                required=""
              />
              <img
                className="position-absolute"
                src={IconPasswordImg}
                alt="Mật khẩu"
              />
            </div>
            <button
              type="submit"
              form="register"
              className="register"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      BoxLogin</div>
    )
}