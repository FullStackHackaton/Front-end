import React from "react";
import "../FilterCategory/FilterCategory.css";
const FilterCategory = () => {
  return (
    <div>
      <div className="filter_func">
        <select name="Device List">
          <option>Категории</option>
          <option>Футболки</option>
          <option>Бокалы</option>
          <option>Наклейки</option>
          <option>Толстовки</option>
        </select>

        <button>Искать</button>
      </div>
    </div>
  );
};

export default FilterCategory;
