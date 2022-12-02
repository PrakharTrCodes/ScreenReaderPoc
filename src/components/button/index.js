import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';

function CustomButton(props) {
  const {
    textColor,
    bgColor,
    text,
    onPressButton,
    disable = false,
    borderColor,
    width,
    marginTop,
    accessibilityLabel,
  } = props;
  console.log('disable', disable);
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.button,
        {
          backgroundColor: disable ? props?.disableColor : bgColor,
          borderColor: borderColor,
        },
        {width: width},
        {marginTop: marginTop},
      ]}
      activeOpacity={0.8}
      onPress={onPressButton}
      disabled={disable}>
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(CustomButton);
const styles = StyleSheet.create({
  button: {
    height: normalize(42),
    marginTop: normalize(20),
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: normalize(14),
    lineHeight: normalize(30),
    textAlign: 'center',
  },
});
