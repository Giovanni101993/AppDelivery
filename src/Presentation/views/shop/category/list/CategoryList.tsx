import React, { useEffect } from 'react'
import { FlatList, Text, ToastAndroid, View } from 'react-native'
import useViewModel from './ViewModel';
import { ShopCategoryListItem } from './Item';

export const ShopCategoryListScreen = () => {
  
  const {categories, user, responseMessagge} = useViewModel();
  
  useEffect(() => {
    if (responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  
  
  return (
    <View style={{backgroundColor: 'white'}}>
        <FlatList
          data = {categories}
          keyExtractor={(item => item.id!)}
          renderItem={({item}) => <ShopCategoryListItem category={item} user= {user}/>}
        />
    </View>
  )
}
