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
import EditUsername from "../components/EditUsername/EditUsername";
import SetUsername from "../components/SetUsername/SetUsername";
import SetPassword from "../components/SetPassword/SetPassword";
import DeleteAccount from "../components/DeleteAccount/DeleteAccount";
import AdminPage from "../pages/AdminPage/AdminPage";
import EditPage from "../pages/AdminPage/EditPage";
import ProductCard from "../components/ProductCard/ProductCard";
import ChatPage from "../pages/ChatPage/ChatPage";
import ProfileUsers from "../pages/ProfileUsers/ProfileUsers";
import PostDetails from "../pages/PostDetails/PostDetails";
import Cart from "../components/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/register", element: <Register />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/activate", element: <Activation />, id: 5 },
    { link: "/people", element: <People />, id: 6 },
    { link: "/password", element: <ResetPassword />, id: 7 },
    {
      link: "/password/reset/confirm",
      element: <NewPassword />,
      id: 8,
    },
    { link: "/profile", element: <ProfilPage />, id: 9 },
    { link: "/forum", element: <ForumPage />, id: 10 },
    { link: "/settings", element: <SettingsPage />, id: 11 },
    { link: "/username/reset/confirm", element: <NewUsername />, id: 12 },
    { link: "/shop", element: <ShopPage />, id: 12 },
    { link: "/editusername", element: <EditUsername />, id: 13 },
    { link: "/setusername", element: <SetUsername />, id: 14 },
    { link: "/setpassword", element: <SetPassword />, id: 15 },
    { link: "/deleteaccount", element: <DeleteAccount />, id: 16 },
    { link: "/admin", element: <AdminPage />, id: 17 },
    { link: "/edit/:slug", element: <EditPage />, id: 18 },
    { link: "/cardtest", element: <ProductCard />, id: 19 },
    { link: "/chat", element: <ChatPage />, id: 20 },
    { link: "/profileusers/:slug", element: <ProfileUsers />, id: 19 },
    { link: "/postdetails/:slug", element: <PostDetails />, id: 20 },
    { link: "/cart", element: <Cart />, id: 21 },
    { link: "/forum", element: <ForumPage />, id: 11 },
    { link: "/settings", element: <SettingsPage />, id: 12 },
    { link: "/username/reset/confirm", element: <NewUsername />, id: 13 },
    { link: "/shop", element: <ShopPage />, id: 14 },
    { link: "/cart", element: <Cart />, id: 15 },
    { link: "/admin", element: <AdminPage />, id: 16 },
    { link: "/edit/:slug", element: <EditPage />, id: 17 },
    { link: "/details/:slug", element: <ProductDetails />, id: 18 },
    { link: "/editusername", element: <EditUsername />, id: 19 },
    { link: "/setusername", element: <SetUsername />, id: 20 },
    { link: "/setpassword", element: <SetPassword />, id: 21 },
    { link: "/deleteaccount", element: <DeleteAccount />, id: 22 },
    { link: "/profileusers/:slug", element: <ProfileUsers />, id: 23 },
    { link: "/postdetails/:slug", element: <PostDetails />, id: 24 },
    { link: "/cart", element: <Cart />, id: 25 },
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

{
  /* <Link to={`/edit/${item.slug}`}>
<button>edit</button>
</Link>
<div className="button__delete">
<button
  onClick={() =>
    dispatch(deleteProduct({ slug: item.slug, navigate }))
  }
>
  delete
</button>
</div> */
}
