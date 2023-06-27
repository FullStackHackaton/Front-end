import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/RegisterPage/Register";
import Login from "../pages/RegisterPage/Login";
import Search from "../pages/SearchPage/Search";
<<<<<<< HEAD
import Activation from "../pages/RegisterPage/Activation";
import People from "../pages/PeoplePage/People";
import ResetPassword from "../pages/RegisterPage/ResetPassword";
import NewPassword from "../pages/RegisterPage/NewPassword";
=======
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import ForumPage from "../pages/ForumPage/ForumPage";
>>>>>>> f9f7648a23c5bfa211d15ab45fad2a2810b6507d

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/register", element: <Register />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/search", element: <Search />, id: 4 },
<<<<<<< HEAD
    { link: "/activate", element: <Activation />, id: 5 },
    { link: "/people", element: <People />, id: 6 },
    { link: "/password", element: <ResetPassword />, id: 7 },
    {
      link: "/password/reset/confirm/:uid/:slug",
      element: <NewPassword />,
      id: 8,
    },
=======
    { link: "/profil", element: <ProfilPage />, id: 5 },
    { link: "/forum", element: <ForumPage />, id: 6 },
>>>>>>> f9f7648a23c5bfa211d15ab45fad2a2810b6507d
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
