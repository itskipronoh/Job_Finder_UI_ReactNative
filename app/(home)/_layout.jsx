import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const HomeLayout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
      }}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3F6CDF",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="JobScreen"
        options={{
          title: "JobScreen",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3F6CDF",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
     <Drawer.Screen
        name="SignOut"
        options={{
          title: "Sign Out",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#3F6CDF",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer>
  );
};

export default HomeLayout;