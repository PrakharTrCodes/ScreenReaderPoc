import moment from 'moment';
import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Spacer from '../spacer';

export default () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(
    'Check all the dates of the data , and employ within and get all the related information',
  );

  return (
    <View style={styles.main}>
      <Button
        accessible
        accessibilityLabel="Button to select your date of birth"
        title="Set Date of birth"
        onPress={() => setOpen(true)}
        color={'#6979f8'}
      />
      <Spacer medium />
      <DatePicker
        modal
        accessible
        open={open}
        date={date}
        mode={'date'}
        accessibilityLanguage="Hindi"
        accessibilityViewIsModal={true}
        accessibilityLabel="Select Date By rolling"
        maximumDate={new Date('2021-12-31')}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Text style={{color: 'white', fontSize: 18}}>
        {moment(date).format('DD/MM/YY')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flexDirection: 'row', alignItems: 'center'},
});
