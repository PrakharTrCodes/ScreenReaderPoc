import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../utils/dimensions';

const Checkbox = () => {
  const [checked, setChecked] = useState();
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
      }}
      accessibilityRole="checkbox"
      accessibilityState={{checked}}>
      <View style={styles.wrapper}>
        {checked ? (
          <Image
            style={styles.checkbox}
            source={require('../assets/images/checkboxChecked.png')}
          />
        ) : (
          <Image
            style={styles.checkbox}
            source={require('../assets/images/checkbox.png')}
          />
        )}
        <Text style={styles.agree}>{'I agree'}</Text>
      </View>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: normalize(75),
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  agree: {color: 'white', fontSize: 16},
});
