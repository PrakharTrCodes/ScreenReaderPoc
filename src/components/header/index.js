import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';

const Header = ({heading}) => {
  return (
    <View accessible style={styles.headerStyle}>
      <Text accessible style={styles.heading}>
        {heading}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: normalize(60),
    backgroundColor: 'black',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
