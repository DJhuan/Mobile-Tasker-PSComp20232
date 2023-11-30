import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from "../contexts/Auth";

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const NavigatorSwap = () => {
  const { isLoggedIn, username } = AuthContext();

  if (isLoggedIn) {
    return HomeNavigator(username ? username : "NO USER");
  } else {
    return <AuthNavigator />;
  }
};

export default () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigatorSwap />
      </AuthProvider>
    </NavigationContainer>
  );
};
