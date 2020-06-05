import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Tab1'

    >
      <BottomTab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          title: 'Tab1',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          title: 'Tab2',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}


