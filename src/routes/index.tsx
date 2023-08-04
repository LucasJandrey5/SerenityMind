import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Menu from "../screens/Menu";
import MusicPlayer from "../screens/Audio";
import Header from "../Components/Header/index";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator>
        <Tab.Screen
          name="audio"
          component={MusicPlayer}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
