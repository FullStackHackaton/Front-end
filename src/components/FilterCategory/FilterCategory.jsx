import React from "react";
import "../FilterCategory/FilterCategory.css";
import { useSelector } from "react-redux";
const FilterCategory = () => {
  const { categories } = useSelector((state) => state.products);

  return (
    <div>
      <div className="filter_func">
        <select className="device__list" name="Device List">
          {categories?.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterCategory;
