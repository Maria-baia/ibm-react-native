import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TelaA') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'TelaB') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'TelaC') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EB9486',
        tabBarInactiveTintColor: '#7E7F9A',
      })}
      initialRouteName="TelaB">
      <Tab.Screen name="TelaA" component={TelaA} />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
  );
};
