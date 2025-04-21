import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ErrorRoute from "./components/ErrorRoute";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appstore from "./utils/Appstore";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Abhishek Anand",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <Provider store={appstore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
      {/* <Footer /> */}
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
