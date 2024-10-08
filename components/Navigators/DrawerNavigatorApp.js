import { View, Text, TouchableOpacity } from "react-native";
import HomeScreen from "../../screens/HomeScreen";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HamburgerIcon } from "../../icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import NavBar from "../NavBar";
const Drawer = createDrawerNavigator();
const UserView = () => {
  return (
    <>
      <LinearGradient colors={["#bb1111", "#810d0d"]}>
        <SafeAreaView edges={["top"]} />
        <View style={{ padding: RFPercentage(2) }}>
          <HamburgerIcon size={RFPercentage(3)} />
        </View>
      </LinearGradient>
    </>
  );
};
const CustomDrawer = (props) => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <UserView />
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </SafeAreaProvider>
  );
};
export default function MyDrawer() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "back",
          drawerStyle: { width: RFPercentage(30) },
        }}
        drawerContent={(props) => {
          return <CustomDrawer {...props} />;
        }}
      >
        <Drawer.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
}
