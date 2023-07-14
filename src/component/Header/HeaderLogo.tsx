
import LogoImage from "../../assets/logo.png"

export default function HeaderLogo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={LogoImage} alt="Tuli design" />
      </a>
    </div>
  );
}
