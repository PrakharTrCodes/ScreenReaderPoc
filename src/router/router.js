// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImplementingRudder from '../screens/accessbility';

function HomeScreen() {
  const navigation = useNavigation();
  //   Linking.addEventListener('', ({url}) => {
  //     console.log('URL', url);
  //   });

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
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Accessibility" component={ImplementingRudder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
