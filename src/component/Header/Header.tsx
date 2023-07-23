import Topbar from "./Topbar";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";
import NavMobile from "./NavMobile"
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import BoxAccount from "./BoxAccount";

import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showBoxAccount, setShowBoxAccount] = useState(false);

  const handleShowSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  //Ẩn hiện blox login
  const handleShowBoxAccount = () => {
    setShowBoxAccount(true)
  }
  const handleCloseBoxAccount = (e:Event) => { 
   e.target.classList.contains("box_account") ? setShowBoxAccount(false) 
   : e.target.classList.contains("close_account") 
   ? setShowBoxAccount(false) : setShowBoxAccount(true);
  }
  return (
    <>
      <Topbar />
      <div className="header_main d-flex align-items-cen
      ter">
        <Container>
          <Row>
            <Col xs={3} className="d-block d-lg-none d-xl-none">
              <NavMobile />
            </Col>
            <Col xs={6}  xl={2}>
              <HeaderLogo/>
            </Col>
            <Col md={7} xl={8} className="d-none d-lg-block">
              <HeaderMenu/>
            </Col>
            <Col xl={2} md={3} xs={3}>
              <HeaderRight onShow={handleShowSearch} handleShowBoxAccount={handleShowBoxAccount}/>
            </Col>
          </Row>
        </Container>
      </div>
      <HeaderSearch onHide={handleCloseSearch} show={showSearch}/>
      <BoxAccount showBoxAccount={showBoxAccount} handleCloseBoxAccount={handleCloseBoxAccount}/>
    </>
  );
}
