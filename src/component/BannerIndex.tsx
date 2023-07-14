import BannerIndexImg from "../assets/banner_index.png"
import BannerIndexImgMb from "../assets/banner_indexmb.png"

export default function BannerIndex() {
  return (
    <section className="banner_index">
      <div className="container">
        <a href="collection.html">
          <picture>
            <source media="(min-width:768px)" srcSet={BannerIndexImg} />
            <source
              media="(max-width:767px)"
              srcSet={BannerIndexImgMb}
            />
            <img
              className="rounded-2"
              src={BannerIndexImg}
              alt="Tuli design"
            />
          </picture>
        </a>
      </div>
    </section>
  );
}
