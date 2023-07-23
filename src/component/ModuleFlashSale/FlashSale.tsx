import CountDown from "./CountDown";
import ItemProduct from "../ItemProduct";
import Button from "react-bootstrap/Button";
import HotSaleImg from "../../assets/hotsale.gif"

import useSwiperHook from "../../hooks/useSwiperHook";
import { Col, Row, Container } from "react-bootstrap";

export default function FlashSale({products}) {
  const {Swiper, SwiperSlide, Navigation, Autoplay } = useSwiperHook()
  
  const filterProducts = products.filter((product)=> {
    return product.collections.includes("Flash sale")
  })
  const items = filterProducts.map((product, index) => {
    return (<SwiperSlide key={index}><ItemProduct product={product} /></SwiperSlide>)
  })
  
  const breakpoint = {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }

  return (
    <>
      <section className="flash_sale">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="flashsale_container">
                <div className="flashsale_maintitle flex-wrap align-items-center">
                  <h2 className="position-relative fw-bold">Flash sale</h2>
                  <CountDown />
                </div>
                <div className="flashsale_mainproduct p-1">
                  <Swiper                     
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={breakpoint}
                    navigation
                    autoplay
                  >
                      {items}
                  </Swiper>
                  <div className="text-center mb-2">
                    <Button variant="light" href="/collections">Xem thêm</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
