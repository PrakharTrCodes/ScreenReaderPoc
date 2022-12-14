import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
const Profile = () => {
  const navigation = useNavigation();
  console.log('hello');
  return (
    <SafeAreaView>
      <Text>{'This is Profile'}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('hello');
        //   navigation.navigate('Accessibility');
          navigation.goBack();
        }}>
        <Text>{'Back'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Profile;
