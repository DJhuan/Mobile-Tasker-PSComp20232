import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES, COLORS } from "../assets/constants";

import { LoginScreen, Register } from "../views";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.ligth,
        headerStyle: {
          backgroundColor: COLORS.header,
        },
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
