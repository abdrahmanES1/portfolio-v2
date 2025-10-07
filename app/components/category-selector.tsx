import React, { useState } from "react";
import { CATEGORIES, Category } from "@/constants";

function CategorySelector({ getCategory, selectedCategory }: { getCategory: Function,  selectedCategory:Category}) {

  const handleChange = (cat: Category) => {
    getCategory(cat);
  };
  return (
    <ul
      className="mt-4 ml-4 inline-flex flex-wrap gap-2 "
      aria-label="Categories"
    >
      {CATEGORIES.map((cat) => (
        <li key={cat}>
          <button
            onClick={() => handleChange(cat)}
            className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition 
                ${
                  selectedCategory === cat
                    ? "bg-teal-400/20 text-teal-300"
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/60"
                }`}
          >
            {cat.split('_').join(" ")}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategorySelector;
