import IconHomeImg from "../assets/home.svg"

export default function BreadCrum() {
  return (
    <div className="breadcrums d-flex align-items-center mb-4">
      <div className="container">
        <li>
          <a href="/">
            <img src={IconHomeImg} alt="Trang chủ" /> Trang chủ
          </a>
          <span>/</span>
        </li>
        <li>
          <span>
            Chính sách mua sỉ
          </span>
        </li>
      </div>
    </div>
  );
}
