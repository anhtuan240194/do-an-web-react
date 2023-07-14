
export default function ItemBlog(){
    return (
        <div className=" blog_item">
        <a
          className="d-inline-block position-relative"
          data-blog-id={1}
          href="/article.html?hoc-lom-tuyet-chieu-mixmatch-outfit-mua-he-chuan-nhu-ninh-duong-lan-ngoc-cung-loat-sao-viet"
        >
          <img
            src="/image/blogimage/article-1.jpg"
            alt="Học lỏm” tuyệt chiêu mix&match outfit mùa hè “chuẩn” như Ninh Dương Lan Ngọc cùng loạt sao Việt"
          />
          <div className="blog_posttime position-absolute">
            <p className="postime_date">10</p>
            <p className="postime_month">Tháng 7</p>
          </div>
        </a>
        <div className="blog_info">
          <h3 className="blog_item_title" data-blog-id={1}>
            <a href="/article.html?hoc-lom-tuyet-chieu-mixmatch-outfit-mua-he-chuan-nhu-ninh-duong-lan-ngoc-cung-loat-sao-viet">
              Học lỏm” tuyệt chiêu mix&amp;match outfit mùa hè “chuẩn” như Ninh Dương
              Lan Ngọc cùng loạt sao Việt
            </a>
          </h3>
          <span className="blog_item_author">Đăng bởi: Vũ Anh Tuấn</span>
          <p className="blog_item_summary">
            Không thể lọt qua mắt xanh của các “thánh soi”, bí quyết lên đồ giúp
            streetstyle của Lan Ngọc, Will, Thiên Minh,…
          </p>
        </div>
      </div>
        
    )
}