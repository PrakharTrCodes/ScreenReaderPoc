import React, {useState} from 'react';
import {Switch, StyleSheet, View, Text} from 'react-native';

const AccessibleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.switchView}>
      <Switch
        accessibilityState={{isEnabled}}
        accessible
        accessibilityHint="switch to enable disable facebook linking"
        trackColor={{false: '#767577', true: '#6979f8'}}
        thumbColor={isEnabled ? 'black' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled ? (
        <Text style={[styles.text, {color: '#6979f8'}]}>
          {'Facebook Account Linked'}
        </Text>
      ) : (
        <Text style={styles.text}>{'Link Facebook Account'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  switchView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default AccessibleSwitch;
