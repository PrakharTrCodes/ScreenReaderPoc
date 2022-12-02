import {Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TermAndCondition = ({isVisible, setIsVisible}) => {
  return (
    <Modal
      accessible
      accessibilityViewIsModal={true}
      visible={isVisible}
      animationType="slide">
      <SafeAreaView style={styles.mainModal}>
        <Text
          onPress={() => {
            setIsVisible(!isVisible);
          }}
          style={styles.cross}>
          {'❌'}
        </Text>
        <Text
          style={styles.text}
          accessible>{`${'Mobile app terms and conditions, also referred to as app terms of service or app terms of use, explain the rules, requirements, restrictions, and limitations that users must abide by in order to use a mobile application. Specifically, they act as a binding contract between you and your users. This contract helps protect the rights of both parties. Business owners and app developers often use the same terms and conditions for both their website and mobile applications in order to keep their terms consistent across all platforms.App terms and conditions help protect the owner’s intellectual property, and allow them to prohibit unwanted user activity and terminate user accounts that violate their terms.'}`}</Text>
      </SafeAreaView>
    </Modal>
  );
};

export default TermAndCondition;

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  cross: {position: 'absolute', top: 40, right: 20, zIndex: 1},
  text: {color: 'white', fontSize: 20},
});
