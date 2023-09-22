// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme.context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/signIn/Signin.tsx";
import Signup from "./components/Register/Signup.tsx";
import Landing from "./components/Landing/Landing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Landing />,
    },{
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>,
);
