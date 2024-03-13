import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./data/AppContext";
import GuestRoute from "./components/SpecialRoute/GuestRoute";
import MemberRoute from "./components/SpecialRoute/MemberRoute";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./components/Home/Home";
import UserAuthForm from "./components/UserAuthForm/UserAuthForm";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import CreateEmployee from "./components/CreateEmployee/CreateEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <GuestRoute element={<UserAuthForm type="login" />} />,
      },
      {
        path: "/register",
        element: <GuestRoute element={<UserAuthForm type="register" />} />,
      },
      {
        path: "/dashboard",
        element: <MemberRoute element={<Dashboard />} />,
      },
      {
        path: "/employees",
        element: <MemberRoute element={<EmployeeList />} />,
      },
      {
        path: "/employees/create",
        element: <MemberRoute element={<CreateEmployee />} />,
      },
      {
        path: "/employees/:id/edit",
        element: <MemberRoute element={<EditEmployee />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
);
