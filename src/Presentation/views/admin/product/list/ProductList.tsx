import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { FlatList, Text, ToastAndroid, View } from 'react-native';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';
import useViewModel from './ViewModel';
import { AdminProductListItem } from './Item';


interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'>{};
export const AdminProductListScreen = ({navigation, route}: Props) => {
 
  const { user, category } = route.params ;

  const {products, responseMessagge, getProductsByUser, deleteProduct } = useViewModel();

  useEffect(() => {
    console.log("Category:", category.id);

    console.log("USer:",user.id);

    if (user.id !== undefined || category.id! !== undefined) {
      getProductsByUser(user.id!, category.id!);
    }
  }, []);

  useEffect(() => {
    if(responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])

  return (
    <View style={{backgroundColor: 'white'}}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => <AdminProductListItem product= {item}  category={category} user={user} remove={deleteProduct}/>}
        >
        </FlatList>
    </View>
  )
}

