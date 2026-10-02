import { Link, useLocation, useRouter } from "@tanstack/react-router";

function RecipeNav() {
  const router = useRouter();
  // Only go back when the previous entry is the home page; otherwise history.back()
  // could land on another recipe or an earlier in-recipe state (e.g. ?page=2).
  const cameFromIndex = useLocation({ select: (location) => location.state.fromIndex === true });

  return (
    <nav className="recipe-nav">
      <div className="recipe-nav-inner">
        {cameFromIndex ? (
          <button type="button" className="back-link" onClick={() => router.history.back()}>
            ← All recipes
          </button>
        ) : (
          <Link to="/" className="back-link">
            ← All recipes
          </Link>
        )}
      </div>
    </nav>
  );
}

export default RecipeNav;
