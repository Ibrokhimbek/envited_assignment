import { Home } from "../pages";
import { Event } from "../pages";
import { Create } from "../pages";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/event",
    exact: true,
    component: <Event />,
  },
  {
    path: "/create",
    exact: true,
    component: <Create />,
  },
];
