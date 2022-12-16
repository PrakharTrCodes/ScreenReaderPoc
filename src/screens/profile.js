import {useNavigation} from '@react-navigation/native';
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, Button} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const Profile = () => {
  const [instanceId, setInstanceId] = useState('');

  useEffect(() => {
    getId();
  }, []);

  const getId = async () => {
    const id = await analytics().getAppInstanceId();
    console.log('iddd', id);
    if (id) {
      setInstanceId(id);
    }
  };

  const navigation = useNavigation();
  console.log('hello');
  console.log('jdgffgehwgdgy');
  return (
    <SafeAreaView>
      <Text>{'This is Profile'}</Text>
      <TouchableOpacity
        onMagicTap={() => {
          console.log('magic');
        }}
        onPress={() => {
          console.log('hello');
          //   navigation.navigate('Accessibility');
          navigation.goBack();
        }}>
        <Text>{'Back'}</Text>
      </TouchableOpacity>
      <Button
        title="trying new analytics"
        onPress={() => {
          rudderClient.track(
            'ProductListViewed',
            {
              ga4ClientId:
                '444709894298-2fq60vrshfesmd8ohovj63kkk9tgh2oe.apps.googleusercontent.com',
              list_id: 'related_products',
              category: 'Related_products',
              products: [
                {
                  product_id: '507f1f77bcf86cd799439011',
                  name: 'Monopoly: 3rd Edition',
                  coupon: 'SUMMER_FUN',
                  category: 'Apparel',
                  brand: 'Google',
                  variant: 'green',
                  price: '19',
                  quantity: '2',
                  position: '1',
                  affiliation: 'Google Merchandise Store',
                  currency: 'USD',
                  discount: 2.22,
                  item_category2: 'Adult',
                  item_category3: 'Shirts',
                  item_category4: 'Crew',
                  item_category5: 'Short sleeve',
                  item_list_id: 'related_products',
                  item_list_name: 'Related Products',
                  location_id: 'L_12345',
                },
              ],
            },
            {
              externalId: [
                {
                  type: 'ga4AppInstanceId',
                  id: instanceId,
                },
              ],
            },
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('hello');
          //   navigation.navigate('Accessibility');
          rudderClient
            .putAnonymousId('123456')
            .then(() => {
              console.log('then');
            })
            .catch(() => {
              console.log('heyyy');
            });
          rudderClient.track(
            'Product List Viewed',
            {
              list_id: 'related_products',
              category: 'Related_products',
              products: [
                {
                  product_id: '507f1f77bcf86cd799439011',
                  name: 'Monopoly: 3rd Edition',
                  coupon: 'SUMMER_FUN',
                  category: 'Apparel',
                  brand: 'Google',
                  variant: 'green',
                  price: '19',
                  quantity: '2',
                  position: '1',
                  affiliation: 'Google Merchandise Store',
                  currency: 'USD',
                  discount: 2.22,
                  item_category2: 'Adult',
                  item_category3: 'Shirts',
                  item_category4: 'Crew',
                  item_category5: 'Short sleeve',
                  item_list_id: 'related_products',
                  item_list_name: 'Related Products',
                  location_id: 'L_12345',
                },
              ],
            },
            {
              externalId: [
                {
                  type: 'ga4AppInstanceId',
                  id: instanceId,
                },
              ],
            },
          );
        }}>
        <Text>{'Crack the new'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Profile;
