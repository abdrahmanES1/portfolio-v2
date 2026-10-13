"use client";
import React from "react";
import {
  ProjectFilterCategory,
  PROJECT_FILTER_CATEGORIES,
  CATEGORY_LABELS,
} from "@/constants";

interface CategorySelectorProps {
  getCategory: (cat: ProjectFilterCategory) => void;
  selectedCategory: ProjectFilterCategory;
  counts?: Partial<Record<ProjectFilterCategory, number>>;
}

function CategorySelector({
  getCategory,
  selectedCategory,
  counts,
}: CategorySelectorProps) {
  return (
    <div
      className="mt-4 flex flex-wrap items-center gap-2"
      role="group"
      aria-label="Filter projects by domain"
    >
      {PROJECT_FILTER_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = counts ? counts[cat] : undefined;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => getCategory(cat)}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all ${
              isSelected
                ? "bg-teal-400 text-sky-950 shadow-md shadow-teal-500/20"
                : "border border-slate-700 bg-slate-800/80 text-slate-300 hover:border-teal-400/50 hover:bg-slate-700/60 hover:text-white"
            }`}
          >
            <span>{CATEGORY_LABELS[cat]}</span>
            {count !== undefined && (
              <span
                className={`ml-1.5 rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  isSelected
                    ? "bg-sky-950/20 text-sky-950"
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default CategorySelector;
