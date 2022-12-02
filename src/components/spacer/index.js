import React from 'react';
import {View} from 'react-native';

const SIZES = {
  smallest: 5,
  small: 10,
  default: 15,
  medium: 20,
  large: 25,
  largest: 40,
};

const getDimensions = ({smallest, small, medium, large, largest}) => {
  let type = 'default';
  if (smallest) {
    type = 'smallest';
  }
  if (small) {
    type = 'small';
  }
  if (medium) {
    type = 'medium';
  }
  if (large) {
    type = 'large';
  }
  if (largest) {
    type = 'largest';
  }
  const size = SIZES[type];
  return {
    width: size,
    height: size,
  };
};

const Spacer = props => {
  const {fullWidth, ...rest} = props;

  // eslint-disable-next-line no-sparse-arrays
  const baseStyle = [
    getDimensions(props),
    fullWidth && {width: '100%'},
    {...rest},
    ,
  ];
  return <View style={baseStyle} />;
};

Spacer.SIZES = SIZES;

export default Spacer;
