import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CostOfLife } from "./pages/CostOfLife";
import { CostOfLifePrivacy } from "./pages/CostOfLifePrivacy";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/cost-of-life",
    Component: CostOfLife,
  },
  {
    path: "/cost-of-life/privacy",
    Component: CostOfLifePrivacy,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:id",
    Component: BlogPost,
  },
]);
