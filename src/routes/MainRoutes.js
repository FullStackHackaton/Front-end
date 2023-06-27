import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/RegisterPage/Register";
import Login from "../pages/RegisterPage/Login";
import Search from "../pages/SearchPage/Search";
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import ForumPage from "../pages/ForumPage/ForumPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/register", element: <Register />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/search", element: <Search />, id: 4 },
    { link: "/profil", element: <ProfilPage />, id: 5 },
    { link: "/forum", element: <ForumPage />, id: 6 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
