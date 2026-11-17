import { Stack } from "expo-router";
import { Header } from "expo-router/build/react-navigation/index.js";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown : false}}/>;
}
