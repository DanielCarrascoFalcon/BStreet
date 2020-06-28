import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Map from '../screens/Map';
import Tab2 from '../screens/Tab2';
import NewComment from '../screens/NewComment';
import Prueba from '../screens/Prueba';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName='Map'

        >
            <BottomTab.Screen
                name="Map"
                component={Map}
                options={{
                    title: 'Map',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
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
            <BottomTab.Screen
                name="NewComment"
                component={NewComment}
                options={{
                    title: 'NewComment',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
                }}
            />
            <BottomTab.Screen
                name="Prueba"
                component={Prueba}

                options={{
                    title: 'Prueba',
                    tabBarVisible: true,
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatboxes" />,
                }}
            />

        </BottomTab.Navigator>
    );
}
