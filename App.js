import { StatusBar } from "expo-status-bar";
import MainScreen from "./components/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./components/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        <StatusBar style="false" />
      </NavigationContainer>
    </>
  );
}
