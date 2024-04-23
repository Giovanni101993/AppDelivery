import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { DeliveryStoreItem } from './Item';
import useViewModel from './ViewModel'
import { RegisterDeliveryStackParamList } from '../../../../navigator/RegisterDeliveryNavigator';
import { User } from '../../../../../Domain/entities/User';

interface Props extends StackScreenProps<RegisterDeliveryStackParamList, 'AdminDeliveryListScreen'>{};

export const AdminDeliveryListScreen = ({navigation, route}: Props) => {
  
  const {users, deliveryMen, user, getDeliveryMen} = useViewModel();

  useEffect(() => {
    //console.log("USER:",user.id, user.name_store);
    if (user.id !== '') {
      
      getDeliveryMen(user.id!);
    }
    
  }, [])

  return (
 
<View style={{flex:1, backgroundColor:'white'}}>

<FlatList
    data = {deliveryMen}
    keyExtractor={(item => item.id!)}
    renderItem={({item}) => (
      <DeliveryStoreItem user ={user} navigation={navigation}/>
    )}
/>

</View>
  )
}

