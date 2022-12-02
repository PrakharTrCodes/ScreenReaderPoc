import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const AccessibleSlider = () => {
  const [value, setValue] = useState(0);
  const _onValueChange = val => {
    setValue(Math.floor(val));
  };
  return (
    <>
      <Slider
        accessibilityHint="SLide to share interest from 1 to 10"
        accessible
        value={value}
        onValueChange={_onValueChange}
        accessibilityLabel="Slider to set interest"
        style={styles.switch}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#6979f8"
        maximumTrackTintColor="white"
      />
      <Text style={styles.value}>{value}</Text>
    </>
  );
};

export default AccessibleSlider;

const styles = StyleSheet.create({
  switch: {width: 200, height: 40},
  value: {color: 'white'},
});
('');
