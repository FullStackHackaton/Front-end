import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/RegisterPage/Register";
import Login from "../pages/RegisterPage/Login";
import Activation from "../pages/RegisterPage/Activation";
import People from "../pages/PeoplePage/People";
import ResetPassword from "../pages/RegisterPage/ResetPassword";
import ProfilPage from "../pages/ProfilPage/ProfilPage";
import ForumPage from "../pages/ForumPage/ForumPage";
import NewPassword from "../pages/RegisterPage/NewPassword";
import SettingsPage from "../pages/Settings/SettingsPage";
import NewUsername from "../components/EditUsername/NewUsername";
import ShopPage from "../pages/ShopPage/ShopPage";
<<<<<<< HEAD
import EditUsername from "../components/EditUsername/EditUsername";
import SetUsername from "../components/SetUsername/SetUsername";
import SetPassword from "../components/SetPassword/SetPassword";
import DeleteAccount from "../components/DeleteAccount/DeleteAccount";
=======
import AdminPage from "../pages/AdminPage/AdminPage";
import EditPage from "../pages/AdminPage/EditPage";
>>>>>>> 0bb3f64eddb2347f8f495a5fb99a9a04041b8a8a

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/register", element: <Register />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/activate", element: <Activation />, id: 4 },
    { link: "/people", element: <People />, id: 5 },
    { link: "/password", element: <ResetPassword />, id: 6 },
    {
      link: "/password/reset/confirm",
      element: <NewPassword />,
      id: 7,
    },
    { link: "/profile", element: <ProfilPage />, id: 8 },
    { link: "/forum", element: <ForumPage />, id: 9 },
    { link: "/settings", element: <SettingsPage />, id: 10 },
    { link: "/username/reset/confirm", element: <NewUsername />, id: 11 },
    { link: "/shop", element: <ShopPage />, id: 12 },
<<<<<<< HEAD
    { link: "/editusername", element: <EditUsername />, id: 13 },
    { link: "/setusername", element: <SetUsername />, id: 14 },
    { link: "/setpassword", element: <SetPassword />, id: 15 },
    { link: "/deleteaccount", element: <DeleteAccount />, id: 16 },
=======
    { link: "/admin", element: <AdminPage />, id: 13 },
    { link: "/edit/:slug", element: <EditPage />, id: 13 },
>>>>>>> 0bb3f64eddb2347f8f495a5fb99a9a04041b8a8a
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
