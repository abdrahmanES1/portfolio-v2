export const CATEGORIES = ["Data_Science", "Software"] as const;
export type Category = (typeof CATEGORIES)[number];
// ExperienceCategory is now "AI" | "SWE" | "Data"

