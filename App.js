import { StatusBar } from "expo-status-bar";
import MainScreen from "./components/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={MainScreen} />
        </Stack.Navigator>
        <StatusBar style="false" />
      </NavigationContainer>
    </>
  );
}
