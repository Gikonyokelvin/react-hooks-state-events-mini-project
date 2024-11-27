import React from "react";

function CategoryFilter({ categories, selectedButton, onButton }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedButton ? "selected" : "";
    return (
      <button
        key={category}
        className={className}
        onClick={() => selectedButton(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
} 

export default CategoryFilter;
