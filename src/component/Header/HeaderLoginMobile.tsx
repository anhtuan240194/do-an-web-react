
import IconLogout from "../../assets/logout.svg" 
import IconUser from "../../assets/user.svg" 
import {useContextLogin} from "../../hooks/useContextLogin.jsx"

export default function HeaderAccount(
  {handleShowBoxAccount} 
  : {handleShowBoxAccount: () => void}) {
  const { actionLogout, isLogin} = useContextLogin();
  
  return (
    <div className="position-relative">
      { isLogin || (
      <div className="header_account"
      onClick={handleShowBoxAccount}
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
