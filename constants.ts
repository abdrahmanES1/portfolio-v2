export const CATEGORIES = ["Data_Science", "Software"] as const;
export type Category = (typeof CATEGORIES)[number];

export const PROJECT_FILTER_CATEGORIES = ["All", "Data_Science", "Software"] as const;
export type ProjectFilterCategory = (typeof PROJECT_FILTER_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<ProjectFilterCategory, string> = {
  All: "All",
  Data_Science: "AI & Data Science",
  Software: "Software Engineering",
};
