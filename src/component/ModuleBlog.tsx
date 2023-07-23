import ItemBlog from "./ItemBlog";
import useSwiperHook from "../hooks/useSwiperHook";
import { Container } from "react-bootstrap";

interface Blogs {
  blogs: Array<object>;
}
export default function ModuleBlog({ blogs }: { blogs: Blogs }) {
  const { Swiper, SwiperSlide } = useSwiperHook();

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  };

  const items = blogs.map((blog: Blogs, index:number) => (
    <SwiperSlide key={index}>
      <ItemBlog blog={blog} />
    </SwiperSlide>
  ));

  return (
    <section className="blog">
      <h2 className="fw-bold mb-4 text-center">TIN TỨC MỚI</h2>
      <Container>
        <Swiper
          breakpoints={breakpoints}
          slidesPerView={3}
          spaceBetween={20}
        >
          {items}
        </Swiper>
      </Container>
    </section>
  );
}
