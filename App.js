import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import Today from './components/Today';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator()
// const Tab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator();
function HomePage() {
   return (
    
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home}></Tab.Screen>
      <Tab.Screen  name='Today' component={Today}></Tab.Screen>
  </Tab.Navigator>
    
   )
  
     
    
  
  
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name='Login' component={Login}></Stack.Screen>
           {/* <Stack.Screen name='Register' component={Register}></Stack.Screen> */}
           <Stack.Screen name='Home' component={HomePage}></Stack.Screen>

      </Stack.Navigator>
       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
