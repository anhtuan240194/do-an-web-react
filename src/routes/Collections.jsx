import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import SidebarCategory from "../component/collections/SidebarCategory";
import FilterPrice from "../component/collections/FilterPrice";
import FilterColor from "../component/collections/FilterColor";
import ItemProduct from "../component/ItemProduct";

import BannerCollections from "../component/collections/BannerCollections";
import IconFilterImg from "../assets/filter.svg"

import "../css/collection.css"

export default function Collections() {
  const [dataProducts, setDataProducts] = useState([])
  useEffect(() => {
    const getDataCollections = async () => {
      const rest = await fetch ("https://json-sever-do-an-web-react.onrender.com/api/products/")
      const data = await rest.json()
      setDataProducts(data)
    };
    getDataCollections()
  }, [])

  const itemProducts = dataProducts.map((product, index) => 
  <Col xs={6} md={3} sm={4} xl={3} lg={3} key={index}><ItemProduct product={product}/></Col>
  )

  return (
    <>
      <div className="main_collection">
        <div className="container">
            <BannerCollections/>
          <Row>
            <Col xl={9} lg={8} md={{order:2, span: 7}} sm={12} xs={12}>
              <div className="collections">
                <div className="collection_summary mb-4 rounded-2 p-3">
                  <span>
                    Để mua sản phẩm, quý khách cần đăng ký tài khoản nhà bán sỉ
                    và đăng nhập tài khoản sau khi đã được kích hoạt
                  </span>
                </div>
                <Row>
                  {itemProducts}
                </Row>
              </div>
            </Col>
            <Col xl={3} lg={4} md={{span: 5, order: 1}} sm={6} xs={12} className="sidebar_mobile">
              <div className="sidebar_collection">
                <SidebarCategory/>
                <FilterPrice/>
                <FilterColor/>
              </div>
              <div className="medal_fade d-none" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="show_filter rounded-2 p-1 position-fixed text-center">
        <img className="d-block" src={IconFilterImg} alt="Hiển thị bộ lọc" />
        <span>Lọc</span>
      </div>
    </>
  );
}
