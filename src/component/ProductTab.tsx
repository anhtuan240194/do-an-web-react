import Tab from 'react-bootstrap/Tab';
import IconTab1Img from "../assets/icon-gia-soc.png"
import IconTab2Img from "../assets/icon-thoitrang-he.png"
import IconTab3Img from "../assets/icon-bikini.png"
import IconTab4Img from "../assets/icon-xa-hang.png"
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

import ItemProduct from './ItemProduct';
import {Row, Col} from 'react-bootstrap';

interface Product{
  id: Number,
  name: String,
  image: Array<string>
}

export default function ProductTab({products}) {
  
  const filterNewProduct = products.filter((product)=> {
    return product.collections.includes("Hàng mới về")
  })
  
  const itemsNewProduct = filterNewProduct.map((product, index) => {
    return (<Col xs={6} lg={3} md={3} sm={4}><ItemProduct product={product} key={index}/></Col>)
  })
  const filterSummerProduct = products.filter((product)=> {
    return product.collections.includes("Thời trang hè")
  })

  const itemsSummerProduct = filterSummerProduct.map((product, index) => {
    return (<Col xs={6} lg={3} md={3} sm={4}><ItemProduct product={product} key={index}/></Col>)
  })

  const filterBikiniProduct = products.filter((product)=> {
    return product.collections.includes("Bikini")
  })
  const itemsBikiniProduct = filterBikiniProduct.map((product, index) => {
    return (<Col xs={6} lg={3} md={3} sm={4}><ItemProduct product={product} key={index}/></Col>)
  })

  const filterHotProduct = products.filter((product)=> {
    return product.collections.includes("Bikini")
  })
  const itemsHotProduct = filterHotProduct.map((product, index) => {
    return (<Col xs={6} lg={3} md={3} sm={4}><ItemProduct product={product} key={index}/></Col>)
  })

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
            <Tab.Pane eventKey="tab1">
              <Row>
                {itemsNewProduct}
              </Row>
             <Button variant="light" className="view-more_product-tab">Xem thêm</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">
              <Row>
              {itemsSummerProduct}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tab3">
            <Row>
              {itemsBikiniProduct}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tab4">
            <Row>
              {itemsHotProduct}
              </Row>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
      </div>
    </section>
  );
}
