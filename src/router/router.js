// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImplementingRudder from '../screens/accessbility';
import rudderClient from '@rudderstack/rudder-sdk-react-native';

function HomeScreen() {
  const navigation = useNavigation();
  // Linking.addEventListener(
  //   'https://www.youtube.com/watch?v=QBGXXad8z64&ab_channel=FlyingBeast',
  //   ({url}) => {
  //     console.log('URL', url);
  //   },
  // );
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Accessibility');
        }}>
        <Text>{'go to access'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Router() {
  const linking = {
    prefixes: ['screenrecorder://'],
    config: {
      screens: {
        Home: 'Home',
        Accessibility: 'Accessibility',
      },
    },
  };
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          rudderClient.screen(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Accessibility" component={ImplementingRudder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
