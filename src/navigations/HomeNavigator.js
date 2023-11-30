import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Tasks, UserConfig } from "../views";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ROUTES, COLORS, STYLES } from "../assets/constants";

const Stack = createStackNavigator();

function HomeNavigator(username) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.ligth,
        headerStyle: STYLES.header,
        transitionSpec: { open: ANIMATIONS, close: ANIMATIONS },
      }}
      initialRouteName={ROUTES.TASKS}
    >
      <Stack.Screen
        name={ROUTES.TASKS}
        component={Tasks}
        options={({ navigation }) => ({
          headerStyle: STYLES.header,
          headerRight: () => (
            <TouchableOpacity
              style={STYLES.profileButton}
              onPress={() =>
                navigation.navigate({
                  name: ROUTES.PROFILE,
                  params: { user: username },
                })
              }
            >
              <Entypo name="user" size={25} color={COLORS.ligth} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name={ROUTES.PROFILE} component={UserConfig} />
    </Stack.Navigator>
  );
}

const ANIMATIONS = {
  animation: "spring",
  config: {
    stiffness: 800,
    damping: 500,
    mass: 5,
    overshootClamping: true,
    restDisplacementThreshold: 1,
    restSpeedThreshold: 1,
  },
};

export default HomeNavigator;
