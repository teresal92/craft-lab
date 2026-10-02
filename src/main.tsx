import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPendingComponent: () => <p className="page">Loading…</p>,
  defaultErrorComponent: ({ error }) => <p className="page">{String(error)}</p>,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }

  interface HistoryState {
    // Set by links on the home page, so recipe pages know going back lands on "/".
    fromIndex?: boolean;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
