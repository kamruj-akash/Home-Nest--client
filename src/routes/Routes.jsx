import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AddProperty from "../pages/AddProperty/AddProperty";
import AllProperties from "../pages/AllProperties/AllProperties";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import MyProperties from "../pages/MyProperties/MyProperties";
import MyRatings from "../pages/MyRatings/MyRatings";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "all-properties", Component: AllProperties },
      { path: "add-properties", Component: AddProperty },
      { path: "my-properties", Component: MyProperties },
      { path: "my-ratings", Component: MyRatings },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  { path: "*", Component: NotFound },
]);
