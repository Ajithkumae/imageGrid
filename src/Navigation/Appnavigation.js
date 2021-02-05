import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Image from '../Views/Image';
import Message from '../Views/Message';
import { colors } from '../Gloable/gloableconstant';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function MyStack() {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="login"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen name="image" component={HomeTabs} />
        </Stack.Navigator>
    )
}
export function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="image"
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
            tabBarOptions={{
                inactiveTintColor: '#000080',
                activeTintColor: colors.white,
                activeBackgroundColor: colors.lightgray,
                keyboardHidesTabBar: true,
            }}
        >
            <Tab.Screen name="image" component={Image} />
            <Tab.Screen name="Message" component={Message} />
        </Tab.Navigator>
    );
}

export default MyStack;