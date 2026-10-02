import { createFileRoute, Link } from "@tanstack/react-router";

import { recipes } from "../recipes";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>craft lab</h1>
        <p>A table of contents for small UI component recipes.</p>
      </header>
      <ul className="toc">
        {recipes.map((recipe) => (
          <li key={recipe.slug} className="toc-item">
            <Link to="/recipes/$slug" params={{ slug: recipe.slug }} className="toc-link">
              <span className="toc-title">{recipe.title}</span>
              <span className="toc-description">{recipe.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
