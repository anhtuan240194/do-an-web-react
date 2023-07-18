
import IconLogout from "../../assets/logout.svg" 
import IconUser from "../../assets/user.svg" 
import {useContextLogin} from "../../hooks/useContextLogin.jsx"

export default function LoginMobile() {
  const { actionLogout, isLogin} = useContextLogin();
  
  return (
    <div className="d-lg-block d-md-block position-relative d-none">
      { isLogin || (<div className="header_account" 
      >
        <img src={IconUser} alt="Đăng nhập" />
      </div>)}
      { isLogin && (<div className="header_account_logout" 
      onClick={actionLogout}
      >
        <img src={IconLogout} alt="Đăng xuất" />
      </div>) }

    </div>
  );
}
