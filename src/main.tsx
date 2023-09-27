// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme.context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/signIn/Signin.tsx";
import Signup from "./components/Register/Signup.tsx";
import Landing from "./components/Landing/Landing.tsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.tsx";
import VerifyEmail from "./components/verifyEmail/VerifyEmail.tsx";
import ActivateMsgEmail from "./components/activateMsg/activateMsg.tsx";

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
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },
  {
    path: "/verify-email",
    element: <VerifyEmail/>
  },
  {
    path: "/activate-user",
    element: <ActivateMsgEmail/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>,
);
