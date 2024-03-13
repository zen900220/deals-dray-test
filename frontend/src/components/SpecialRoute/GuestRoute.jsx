import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { appContext } from "../../data/AppContext";

const GuestRoute = ({ element }) => {
  const {
    appState: { user },
  } = useContext(appContext);

  return (
    <>
      {user && user.username ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        element
      )}
    </>
  );
};

export default GuestRoute;
