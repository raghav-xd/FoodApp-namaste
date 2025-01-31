import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import { useState } from "react";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrurantMenu from "./components/RestrurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// import Grocery from "./components/Grocery";
import Cart from "./components/Cart";

import React from "react";
import { lazy } from "react";

// To reduce the bundler size (distribution of large application in smaller chunks) it can be done by lazy loading
//Dynamic bunding
// lazy loading  which means intially it not loads the all component it will load when we click on that route
//chunking
//spliting component

const Grocery = lazy(() => import("./components/Grocery"));

// App layout
function App() {
  const [username, setusername] = useState("hi, Rghv");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ user: username, setusername }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Menu />
            <Body />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },

      {
        path: "/restrurant/:resId",
        element: <RestrurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
