import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery.js";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import UserContext from "./utils/UserContext.js";
import Shimmer from "./components/Shimmer.js";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    //fetch api
    const data = {
      name: "Samiksha Surawashi",
    };
    setUsername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: username }}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet></Outlet>
      </div>
    </UserContext.Provider>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid", //use : to pass params
        element: <RestaurantsMenu></RestaurantsMenu>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
