// import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export const router = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
];