import type { ComponentType } from "react";

import Pagination from "./pagination/Pagination";

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  Component: ComponentType;
}

export const recipes: Recipe[] = [
  {
    slug: "pagination",
    title: "Pagination",
    description: "Page-number navigation with ellipses for large ranges.",
    Component: Pagination,
  },
];

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}
