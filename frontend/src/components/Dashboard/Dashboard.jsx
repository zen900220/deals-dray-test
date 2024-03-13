import React, { useContext } from "react";
import "./Dashboard.css";
import { appContext } from "../../data/AppContext";

const Dashboard = () => {
  const {
    appState: { user },
  } = useContext(appContext);

  return (
    <main className="dashboard night-background">Welcome {user.username}</main>
  );
};

export default Dashboard;
