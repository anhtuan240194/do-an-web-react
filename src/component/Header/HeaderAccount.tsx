
import IconLogout from "../../assets/logout.svg" 
import IconUser from "../../assets/user.svg" 

export default function HeaderAccount() {
  return (
    <div className="d-none d-lg-block d-md-block position-relative">
      <div className="header_account d-none">
        <img src={IconUser} alt="Đăng nhập" />
      </div>
      <div className="header_account_logout">
        <img src={IconLogout} alt="Đăng xuất" />
      </div>
    </div>
  );
}
