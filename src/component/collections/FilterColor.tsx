
export default function FilterColor() {
  return (
    <div className="sidebar_filter mb-3 p-3 rounded-3 filter-color">
      <div className="sidebar_title fw-bold mb-3">MÀU SẮC</div>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="white"
          data-filter-color="Trắng"
          name="filtercolor"
        />
        <label htmlFor="white">
          <i className="fa fa-white" />
        </label>
      </li>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="black"
          data-filter-color="Đen"
          name="filtercolor"
        />
        <label htmlFor="black">
          <i className="fa fa-black" />
        </label>
      </li>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="yellow"
          data-filter-color="Vàng"
          name="filtercolor"
        />
        <label htmlFor="yellow">
          <i className="fa fa-yellow" />
        </label>
      </li>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="green"
          data-filter-color="Xanh"
          name="filtercolor"
        />
        <label htmlFor="green">
          <i className="fa fa-green" />
        </label>
      </li>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="blue"
          data-filter-color="Xanh trời"
          name="filtercolor"
        />
        <label htmlFor="blue">
          <i className="fa fa-blue" />
        </label>
      </li>
      <li className="filter_option d-inline-block position-relative">
        <input
          type="checkbox"
          id="red"
          data-filter-color="Đỏ"
          name="filtercolor"
        />
        <label htmlFor="red">
          <i className="fa fa-red" />
        </label>
      </li>
    </div>
  );
}
