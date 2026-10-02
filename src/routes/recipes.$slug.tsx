import { createFileRoute, notFound } from "@tanstack/react-router";

import RecipeNav from "../components/RecipeNav";
import { getRecipe } from "../recipes";

export const Route = createFileRoute("/recipes/$slug")({
  loader: ({ params }) => {
    const recipe = getRecipe(params.slug);
    if (!recipe) throw notFound();
    return recipe;
  },
  component: RecipePage,
  notFoundComponent: RecipeNotFound,
});

function RecipePage() {
  const { title, description, Component } = Route.useLoaderData();

  return (
    <>
      <RecipeNav />
      <main className="page">
        <header className="page-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        <section className="recipe-stage">
          <Component />
        </section>
      </main>
    </>
  );
}

function RecipeNotFound() {
  return (
    <>
      <RecipeNav />
      <main className="page">
        <header className="page-header">
          <h1>Recipe not found</h1>
          <p>There's no recipe at this URL.</p>
        </header>
      </main>
    </>
  );
}
