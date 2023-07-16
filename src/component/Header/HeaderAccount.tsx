
import IconLogout from "../../assets/logout.svg" 
import IconUser from "../../assets/user.svg" 
import {useContextLogin} from "../../hooks/useContextLogin.jsx"

export default function HeaderAccount() {
  const {actionLogin, actionLogout, isLogin} = useContextLogin()
  return (
    <div className="d-lg-block d-md-block position-relative">
      <div className="header_account">
        <img src={IconUser} alt="Đăng nhập" />
      </div>
      { isLogin && (<div className="header_account_logout">
        <img src={IconLogout} alt="Đăng xuất" />
      </div>) }

    </div>
  );
}
