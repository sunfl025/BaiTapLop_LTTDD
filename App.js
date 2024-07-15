import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./components/Login";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./components/Home";
import Today from "./components/Today";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Blossom from "./components/Blossom";
import Register from "./components/Register";
import Completed from "./components/Completed";
import Categories from "./components/Categories";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator();
function HomePage({ route, navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        {...route}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/Home icon.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        name="HomeTab"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/calendar icon.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        name="uncompleted"
        component={Today}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/completed.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        name="Completed"
        component={Completed}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require("./assets/Group 1.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        name="Categories"
        component={Categories}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App({ route, navigation }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Blossom"}
        >
          {/* <Stack.Screen name="BottomTab" component={HomePage}></Stack.Screen> */}
          <Stack.Screen name="Blossom" component={Blossom}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={() => <HomePage route={route}></HomePage>}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "18px",
    height: "18px",
  },
});
