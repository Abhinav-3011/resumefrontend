import React from "react";
import "./index.css";
import App from "./App";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./component/Home/Home.jsx";
import Login from "./component/login/Login";
import Register from "./component/register/Register.jsx";
import About from "./component/about/About.jsx";
import Contact from "./component/contatct/Contact.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
// hello
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
     
        <App />
      </RouterProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
