import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import useViewModel from './ViewModel';
import { AdminCategoryListItem } from './Item';

export const AdminCategoryListScreen = () => {
  
  const {categories, getCategories} = useViewModel();

  useEffect(() => {
    getCategories()
  }, [])
  
  
  return (
    <View style={{backgroundColor: 'white'}}>
        <FlatList
          data = {categories}
          keyExtractor={(item => item.id!)}
          renderItem={({item}) => <AdminCategoryListItem category={item}/>}
        />
    </View>
  )
}
