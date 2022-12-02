import React, {useState} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const AccessibleTextInput = ({
  label,
  isPassword,
  inputValue,
  placeholderText,
  accessibilityLabel,
}) => {
  const editableTextInputColor = 'white';
  const focusedInputColor = '#6979f8';
  const disabledTextInputColor = 'grey';
  const minimumTouchableSize = 48;

  const [isFocused, setFocus] = useState(false);
  const [value, setValue] = useState(inputValue);

  const textInputColor = isFocused
    ? editableTextInputColor
    : disabledTextInputColor;

  const labelStyle = {color: isFocused ? focusedInputColor : textInputColor};

  return (
    <View
      accessible
      style={[
        styles.textInput,
        {borderColor: isFocused ? focusedInputColor : textInputColor},
      ]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholderText}
        placeholderTextColor={textInputColor}
        style={[
          styles.input,
          {
            height: minimumTouchableSize,
            borderColor: isFocused ? focusedInputColor : textInputColor,
          },
        ]}
        // accessibilityState={accessibilityState}
        accessibilityLabel={accessibilityLabel}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default AccessibleTextInput;

const styles = StyleSheet.create({
  textInput: {marginTop: 16, backgroundColor: 'black'},

  input: {
    backgroundColor: 'black',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    marginTop: 8,
    borderWidth: 2,
    color: 'white',
  },
});
