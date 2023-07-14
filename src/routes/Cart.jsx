import CartList from "../component/Cart/CartList"
import OrderInfo from "../component/Cart/OrderInfo"
import Vouchercart from "../component/VoucherCart"
import PaymentCart from "../component/Cart/PaymentCart"

import { Col, Row, Container } from "react-bootstrap"

import "../css/cart.css"


export default function Cart(){
    return (
        <Container>
        <div className="main_cart p-3 rounded-3">
          <Row>
            <Col xs={12}>
              <h1 className="title_page mb-3 fw-bold">GIỎ HÀNG CỦA BẠN</h1>
            </Col>
            <Col xs={12} xl={8} lg={8} md={7} sm={12}>
                <CartList/>
                <OrderInfo/>
            </Col>
            <Col xs={12} xl={4} lg={4} md={5} sm={12}>
                <Vouchercart/>
                <PaymentCart/>
            </Col>
          </Row>
        </div>
      </Container>
    )
}