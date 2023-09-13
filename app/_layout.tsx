import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "skyblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown:false
      }}
    >
      <Stack.Screen name="index" options={{ title: "this is index.js" }} />
    </Stack>
  );
}
