import PopupCartRight from "./PopupCartRight";
import HeaderAccount from "./HeaderLoginMobile";
import HeaderCart from "./HeaderCart";
import IconSearch from "../../assets/search.svg";


import { useState } from "react";

export default function HeaderRight({onShow}) {
  const [show, setShow] = useState(false);

  const handleclick = () => setShow(true);
  const handleClose = () =>  setShow(false)
  return (
    <div className="header_right">
      <img className="header_right_search" src={IconSearch} alt="Search" 
      onClick={onShow}
      />
      <HeaderAccount/>
      <HeaderCart onclick={handleclick} />
      <PopupCartRight show={show} handleClose={handleClose}/>
    </div>
  );
}
