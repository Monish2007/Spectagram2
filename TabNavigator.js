import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
      <NavigationContainer>
        <Tab.Navigator

          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
          <Tab.Screen name="CreatePost" component={CreateStory} options={{headerShown:false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}
  export default BottomTabNavigator;