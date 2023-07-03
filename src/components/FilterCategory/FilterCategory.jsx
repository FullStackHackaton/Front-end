import React from "react";
import "../FilterCategory/FilterCategory.css";
const FilterCategory = () => {
  return (
    <div>
      <div className="filter_func">
        <select className="device__list" name="Device List">
          <option className="category__title">CATEGORY</option>
          <option>Футболки</option>
          <option>Кружки</option>
          <option>Наклейки</option>
          <option>Толстовки</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCategory;
