import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerFlashSaleImg from "../assets/banner_flashsale.jpg"

import "../css/article.css"

export default function Article(){
    return (
        <Container>
        <Row>
          <Col xl={8} lg={8} md={8} sm={7}  xs={12}>
            <div className="main_article p-3 rounded-3 mb-4">
              <h1 className="title_page mt-3 mb-3">tieueddeef blog</h1>
              <div className="article_infor mb-3">
                <span className="article_item_author">Đăng bởi: Vũ Anh Tuấn</span>
                <div className="article_posttime d-inline">
                  <span className="time_date"> - Đăng ngày: 10 /</span>
                  <span className="time_month">Tháng 7</span>
                </div>
              </div>
              <div className="article_content">
                <h4 id="list-item-1">Điều đầu tiên</h4>
                <p>
                  <em>
                    Không thể lọt qua mắt xanh của các “thánh soi”, bí quyết lên đồ
                    giúp streetstyle của Lan Ngọc, Will, Thiên Minh,… trở nên ấn
                    tượng và bắt mắt hơn chính là sự tinh tế trong cách kết hợp cùng
                    các món phụ kiện thời trang từ thương hiệu Tuli Design.
                  </em>
                </p>
                <p>
                  Bên cạnh quần áo, các sao Việt cũng rất chịu khó đầu tư vào khoản
                  phụ kiện phối cùng như túi xách, giày, trang sức,…. Phải nói rằng,
                  những món phụ kiện thời trang góp phần biến hóa phong cách linh
                  hoạt hơn. Nhìn vào loạt ảnh #OOTD của các sao Việt đình đám dù là
                  streetstyle hay đi sự kiện, giới trẻ chỉ muốn copy ngay bởi gu ăn
                  mặc chất lừ cùng thần thái “ngút ngàn” đến thế cơ mà.
                </p>
                <h4 id="list-item-2">Bé mèo Lan Ngọc...</h4>
                <p>
                  “Bé mèo” Lan Ngọc của “Chạy đi chờ chi” thật là vàng tươi giữa một
                  góc phố ngày hè. Sự đồng bộ về màu sắc trong cách phối đồ của Lan
                  Ngọc đạt độ “gây thương nhớ” cao.
                </p>
                <p>
                  Ngọc nữ của điện ảnh Việt có vẻ dành nhiều ưu ái cho mẫu túi cầm
                  tay thời thượng của Tuli Designkhi liên tục diện các items này
                  cùng thiết kế đầm mùa hè gam màu sáng ấn tượng.
                </p>
                <p>
                  Trong khi Ninh Dương Lan Ngọc cực rạng rỡ trong loạt ảnh
                  streetstyle ấn tượng thì hotgirl Jun Vũ vô cùng quyến rũ khi đi sự
                  kiện với bộ cánh màu đen kết hợp cùng túi xách cùng màu sang
                  trọng.
                </p>
                <h4 id="list-item-3">Hotgirl trang Lou</h4>
                <p>
                  Hotgirl Trang Lou hẳn thuộc về team “Đồ đen dự sự kiện” như người
                  đẹp Jun Vũ. Tuy nhiên, thay vì chọn phụ kiện túi xách đen “quyền
                  lực” thì Trang Lou lại tô điểm outfit với túi bucket màu trung
                  tính trang nhã. Điều này chứng minh được sức mạnh của các món phụ
                  kiện thời trang khi các item này góp phần thể hiện cá tính riêng
                  biệt của từng cá nhân.
                </p>
                <p>
                  Công thức không bao giờ lỗi mốt gồm áo sơ mi mix &amp; match quần
                  tây cùng giày sneakers trắng được giọng ca “Nơi ta chờ em” tận
                  dụng triệt để trong từng khung hình. Will 365 có vẻ “nghiện” giày
                  sneakers trắng khi tậu hẳn 2 mẫu thiết kế mới nhất trong BST mùa
                  hè của Tuli Design.
                </p>
                <h4 id="list-item-4">Lời kết</h4>
                <p>
                  Nếu bạn cũng muốn sở hữu những bức ảnh #OOTD chất như sao Việt thì
                  còn chần chừ gì nữa mà không đến ngay cửa hàng Tuli Design, tậu
                  liền tay các món phụ kiện mùa hè mới nhất và thỏa sức
                  mix&amp;match cùng outfit yêu thích. Các sản phẩm thuộc BST Summer
                  - Summer JIT 2023 của Tuli Design hiện đã “lên kệ” tại tất cả các
                  cửa hàng trên toàn quốc.
                </p>
              </div>
            </div>
          </Col>
          <Col  xl={4} lg={4} md={4} sm={5}  xs={12}>
            <div
              id="list-example"
              className="mb-4 d-flex flex-column rounded-3 p-3 gap-2 simple-list-example-scrollspy"
            >
              <h3>Nội dung chính của bài viết</h3>
              <a className="list-item-article" href="#list-item-1">
                Điều đầu tiên không thể lọt qua mắt xanh. . .
              </a>
              <a className="list-item-article" href="#list-item-2">
                “Bé mèo” Lan Ngọc của “Chạy đi chờ chi”...
              </a>
              <a className="list-item-article" href="#list-item-3">
                Hotgirl Trang Lou hẳn thuộc về team ...
              </a>
              <a className="list-item-article" href="#list-item-4">
                Lời kết
              </a>
            </div>
            <div className="related_article mb-4 p-3 rounded-3">
              <h3 className="title_related mt-3 mb-3">BÀI VIẾT LIÊN QUAN</h3>
              <ul className="list_article mb-0"></ul>
            </div>
            <div className="banner_ads mb-4">
              <a href="collection.html">
                <img
                  className="rounded-3"
                  src={BannerFlashSaleImg}
                  alt="Khuyến mãi khủng"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}