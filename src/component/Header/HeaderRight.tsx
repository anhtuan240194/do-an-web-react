import PopupCartRight from "./PopupCartRight";
import HeaderAccount from "./HeaderAccount";
import HeaderCart from "./HeaderCart";
import HeaderSearch from "./HeaderSearch";

import { useState } from "react";

export default function HeaderRight() {
  const [show, setShow] = useState(false);

  const handleclick = () => setShow(true);
  const handleClose = () =>  setShow(false)
  return (
    <div className="header_right">
      <HeaderSearch/>
      <HeaderAccount/>
      <HeaderCart onclick={handleclick} />
      {<PopupCartRight show={show} handleClose={handleClose}/>}
    </div>
  );
}
