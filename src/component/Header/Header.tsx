import Topbar from "./Topbar";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";
import NavMobile from "./NavMobile"
import HeaderLogo from "./HeaderLogo";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <>
      <Topbar />
      <div className="header_main d-flex align-items-center">
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
              <HeaderRight/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
