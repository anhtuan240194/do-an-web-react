export default function FilterPrice() {
  return (
    <div className="sidebar_filter mb-3 p-3 rounded-3 filter-price">
      <div className="sidebar_title fw-bold mb-3">CHỌN MỨC GIÁ</div>
      <div className="filter_option">
        <input
          type="checkbox"
          name="filter-price"
          id="price0"
          data-price-min={0}
          data-price-max={200000}
        />
        <label className="value_filter d-inline-block" htmlFor="price0">
          <span className="value_min">Dưới 200.000đ</span>
        </label>
      </div>
      <div className="filter_option">
        <input
          type="checkbox"
          name="filter-price"
          id="price200"
          data-price-min={200001}
          data-price-max={500000}
        />
        <div className="value_filter d-inline-block">
          <label className="value_min" htmlFor="price200">
            Từ 200.000đ - <span className="value_max">500.000đ</span>
          </label>
        </div>
      </div>
      <div className="filter_option">
        <input
          type="checkbox"
          name="filter-price"
          id="price500"
          data-price-min={500001}
          data-price-max={1000000}
        />
        <div className="value_filter d-inline-block">
          <label
            className="value_min"
            htmlFor="price500"
            data-price-max={500001}
          >
            Từ 500.000đ -<span className="value_max">1.000.000đ</span>
          </label>
        </div>
      </div>
    </div>
  );
}
