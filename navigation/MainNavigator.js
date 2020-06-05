import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import InitialNavigator from './InitialNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Initial'
                na
            >
                <Stack.Screen
                    name='Initial'
                    component={InitialNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="App"
                    component={BottomTabNavigator}
                    options={{
                        title: 'Bstreet',
                        headerLeft: false,
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigator;