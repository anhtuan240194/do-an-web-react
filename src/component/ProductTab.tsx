import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IconTab1Img from "../assets/icon-gia-soc.png"
import IconTab2Img from "../assets/icon-thoitrang-he.png"
import IconTab3Img from "../assets/icon-bikini.png"
import IconTab4Img from "../assets/icon-xa-hang.png"
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

export default function ProductTab() {
  return (
    <section className="product_tabs">
      <div className="container">
      <Tab.Container id="product-tab" defaultActiveKey="tab1">
          <Nav variant="pills" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="tab1"><img src={IconTab1Img}/>Hàng mới về</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab2"><img src={IconTab2Img}/>Thời trang hè</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab3"><img src={IconTab3Img}/>Bikini</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab4"><img src={IconTab4Img}/>Xả hàng giảm sốc</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="tab1">ABC
             <Button variant="light" className="view-more_product-tab">Xem thêm</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">DEF</Tab.Pane>
            <Tab.Pane eventKey="tab3">DEF</Tab.Pane>
            <Tab.Pane eventKey="tab4">DEF</Tab.Pane>
          </Tab.Content>
    </Tab.Container>
      </div>
    </section>
  );
}
