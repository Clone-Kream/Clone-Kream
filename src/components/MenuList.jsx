import React from "react";
import "../css/MenuList.css";

const MenuList = ({ selectedMain, selectedSub, onCategorySelect }) => {
  const categories = ["신발", "아우터"];
  const subCategories = {
    신발: ["스니커즈", "힐/펌프스"],
    아우터: ["자켓", "아노락"],
  };

  const handleMainClick = (mainCategory) => {
    if (selectedMain === mainCategory) {
      onCategorySelect(null, null); // 선택 해제
    } else {
      onCategorySelect(mainCategory, null);
    }
  };

  const handleSubClick = (subCategory) => {
    onCategorySelect(selectedMain, subCategory);
  };

  return (
    <ul className="menu_list">
      {categories.map((category) => (
        <li key={category} className="category-item">
          <label className="category-label">
            <input
              type="checkbox"
              value={category}
              onChange={() => handleMainClick(category)}
              checked={selectedMain === category}
            />
            {category}
          </label>
          {selectedMain === category && (
            <ul className="sub-items">
              {subCategories[category].map((subCategory) => (
                <li key={subCategory}>
                  <label className="category-label">
                    <input
                      type="checkbox"
                      value={subCategory}
                      onChange={() => handleSubClick(subCategory)}
                      checked={selectedSub === subCategory}
                    />
                  </label>
                  {subCategory}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
