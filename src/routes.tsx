import type { JSX } from "react/jsx-dev-runtime";
import Pages from "./windows/Pages";
import App from "./App";

interface Route {
  path: string;
  element: JSX.Element;
}

const routes: Route[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
];

export default routes;
