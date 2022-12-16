import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import CustomButton from '../components/button';
import Header from '../components/header';
import Spacer from '../components/spacer';
import AccessibleTextInput from '../components/rectangleInput';
import DatePicker from '../components/datePicker';
import AccessibleSlider from '../components/slider';
import Checkbox from '../components/checkbox';
import AccessibleSwitch from '../components/switch';
import TermAndCondition from '../components/termAndCondition.js';
import {normalize, vh} from '../utils/dimensions';
import analytics from '@react-native-firebase/analytics';

const ImplementingRudder = () => {
  const [isVisible, setIsVisible] = useState(false);

  const predefinedEvent = async () => {
    rudderClient.identify('user123', {
      name: 'Alex Keener',
      email: 'alex@example.com',
    });
  };

  const onTermPress = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={styles.main}>
      <Header heading={'Form'} />
      <Spacer largest />
      <AccessibleTextInput
        label="Email"
        inputValue=""
        isPassword={false}
        placeholderText="abc@email.com"
        accessibilityLabel="Enter email input field"
      />
      <Spacer medium />
      <AccessibleTextInput
        isPassword={true}
        label="Password"
        inputValue=""
        placeholderText="Enter your password"
        accessibilityLabel="Enter password input field"
      />
      <Spacer medium />
      <DatePicker />
      <Spacer medium />
      <View style={styles.termStyle}>
        <Text style={[styles.termText, {fontSize: 18}]}>{'Interest'}</Text>
        <AccessibleSlider />
      </View>
      <Spacer largest />
      <View style={styles.termStyle}>
        <Text onPress={onTermPress} style={styles.termText}>
          {'Terms and Condition'}
        </Text>
        <Checkbox />
      </View>
      <Spacer largest />
      <CustomButton
        accessibilityLabel="Submit"
        textColor="white"
        bgColor={'#6979f8'}
        text={'Submit'}
        onPressButton={() => {
          console.log('onPress call');
          predefinedEvent();
          async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            });
          rudderClient.track('Here track', {
            test_key_1: 'test_value_1',
            test_key_2: {
              test_child_key_1: 'test_child_value_1',
            },
          });
          rudderClient.track('Here track1', {
            test_key_1: 'test_value_1',
            test_key_2: {
              test_child_key_1: 'test_child_value_1',
            },
          });
          rudderClient.track('Here track2', {
            test_key_1: 'test_value_1',
            test_key_2: {
              test_child_key_1: 'test_child_value_1',
            },
          });
        }}
        width={'90%'}
        disable={false}
        disableColor={'grey'}
      />
      <Spacer largest />
      <CustomButton
        accessibilityLabel="Another track"
        textColor="white"
        bgColor={'#6979f8'}
        text={'Another track'}
        onPressButton={() => {
          console.log('onPress call');

          async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            });
          rudderClient.track('another tracking button', {
            test_key_1: 'test_value_1',
            test_key_2: {
              test_child_key_1: 'test_child_value_1',
            },
          });
        }}
        width={'90%'}
        disable={false}
        disableColor={'grey'}
      />
      <Spacer largest />
      <AccessibleSwitch />
      <TermAndCondition isVisible={isVisible} setIsVisible={setIsVisible} />
    </View>
  );
};

export default ImplementingRudder;

const styles = StyleSheet.create({
  main: {flex: 1, paddingTop: vh(47), backgroundColor: 'black'},
  inputStyle: {marginHorizontal: 20, height: normalize(50)},
  termStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  termText: {color: 'white'},
});
