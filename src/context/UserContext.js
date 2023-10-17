import React, { createContext, useContext, useEffect, useState } from "react";
import userHTTPService from "../main/services/userHTTPService";
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    USER_NAME: "Admin",
    CONNECTED_USER: false,
    HTTP_ERR_MESSAGE: "",
    USER_DETAIL: {},
    DELTE_MSG: "Are you sure you want to delete ?",
    SETTINGS_UPDATE_MSG: "Your settings has been updated.",
  });

  //   static USER_NAME = "Admin";
  //   static CONNECTED_USER = false;
  //   static HTTP_ERR_MESSAGE = "";
  //   static USER_DETAIL = {};
  //   static DELTE_MSG = "Are you sure you want to delete ?";
  //   static SETTINGS_UPDATE_MSG = "Your settings has been updated.";
  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const res = await userHTTPService.getUser(userId);
      setUser({ ...user, USER_NAME: res.data.username, USER_DETAIL: res.data });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user ,getUser}}>{children}</UserContext.Provider>
  );
}
