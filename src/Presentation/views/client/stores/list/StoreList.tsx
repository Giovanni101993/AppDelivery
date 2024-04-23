import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { ClientStoreItem } from './Item';
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientStoreListScreen'>{};

export const ClientStoreListScreen = ({navigation, route}: Props) => {
  
  const {users, getAllStore} = useViewModel();

useEffect(() => {
  getAllStore();
}, [])


  return (
 
<View style={{flex:1, backgroundColor:'white'}}>
<FlatList
    data = {users}
    keyExtractor={(item) => item.id!}
    renderItem={({item}) => <ClientStoreItem  user ={item} navigation={navigation}/>}
/>
</View>
  )
}
