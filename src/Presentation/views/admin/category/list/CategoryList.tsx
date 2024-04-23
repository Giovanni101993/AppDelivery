import React, { useEffect } from 'react'
import { FlatList, Text, ToastAndroid, View } from 'react-native'
import useViewModel from './ViewModel';
import { AdminCategoryListItem } from './Item';
import { Category } from '../../../../../Domain/entities/Category';

export const AdminCategoryListScreen = () => {
  
  const {categories, user, responseMessagge, deleteCategory} = useViewModel();
  
  useEffect(() => {
    if (responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  

  return (
    <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={categories}
          keyExtractor={(item => item.id!)}
          renderItem={({item}) => (
            <AdminCategoryListItem category={item} user={user} remove={deleteCategory} />
          )}
        />
    </View>
  )
}
