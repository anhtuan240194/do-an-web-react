import CountDown from "./CountDown";
import ItemProduct from "../ItemProduct";
import Button from "react-bootstrap/Button";
import HotSaleImg from "../../assets/hotsale.gif"
import { useState, useEffect } from "react";

export default function FlashSale() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    const getDataProducts = async () => {
      const rest = await fetch ("https://json-sever-do-an-web-react.onrender.com/api/products/")
      const data = await rest.json()
      setProducts(data);
    }
    getDataProducts();
  }, []);

  return (
    <>
      <section className="flash_sale">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="flashsale_container">
                <div className="flashsale_maintitle flex-wrap align-items-center">
                  <h2 className="position-relative fw-bold">Flash sale</h2>
                  <CountDown />
                </div>
                <div className="flashsale_mainproduct p-1 swiper">
                  <div className="swiper-wrapper">
                    {products.map((product) => (<ItemProduct product={product} key={product.id}/>))}
                  </div>
                  <div className="text-center">
                    <Button variant="light" href="/collections">Xem thêm</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
