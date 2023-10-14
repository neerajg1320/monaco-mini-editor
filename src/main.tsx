// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme.context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/login/Signin.tsx";
import Signup from "./pages/register/Signup.tsx";
import Landing from "./pages/landing/Landing.tsx";
import ResetPassword from "./pages/resetPassword/ResetPassword.tsx";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail.tsx";
import ActivateMsgEmail from "./pages/activateMsg/ActivateMsg.tsx";

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
