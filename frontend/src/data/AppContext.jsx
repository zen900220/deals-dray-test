import React, { createContext, useMemo, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
  const [appState, setAppState] = useState({
    loading: false,
    user: {
      _id: 1,
      username: "Pratim Acharya",
    },
    employees: [
      {
        _id: 2,
        name: "Test 1",
      },
      {
        _id: 3,
        name: "Test 2",
      },
    ],
  });

  const value = useMemo(
    () => ({
      appState,
      setAppState,
    }),
    [appState]
  );

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppContext;
