import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
          }}
        />
      </Drawer>
    </>
  );
}
