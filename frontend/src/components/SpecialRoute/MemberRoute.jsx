import React, { useContext } from "react";
import { appContext } from "../../data/AppContext";
import { Navigate } from "react-router-dom";

const MemberRoute = ({ element }) => {
  const {
    appState: { user },
  } = useContext(appContext);

  return (
    <>
      {user && user.username ? (
        element
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default MemberRoute;
