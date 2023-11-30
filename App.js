import "react-native-gesture-handler";
import React from "react";
import Navigation from "./src/navigations";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
