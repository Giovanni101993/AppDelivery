import React from 'react'
import { FlatList, Text, View } from 'react-native';
import useViewModel from './ViewModel';
import { ShoppingBagItem } from './Item';
import { RoundedButton } from '../../../components/RoundedButton';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../navigator/ClientStackNavigator';


interface Props extends StackScreenProps <ClientStackParamList, 'ClientShoppingBagScreen'>{};

export const ClientShoppingBagScreen = ({navigation, route}: Props) => {

  const {shoppingBag, total, addItem, subtractItem, deleteItem} = useViewModel();
  return (
    <View style={styles.container}>
          <FlatList
            data={shoppingBag}
            keyExtractor={(item) =>  item.id!}
            renderItem={({item}) => 
              <ShoppingBagItem 
                product={item}
                addItem = {addItem}
                substractItem = {subtractItem}
                deleteItem = {deleteItem}
              />
            }
          />

        <View style={styles.totalPay}>
          <View style={styles.totalInfo}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text>$ {total}</Text>
          </View>

          <View style={styles.buttonAdd}>
            <RoundedButton
              
              text='CONFIRMAR COMPRA'
              onPress={() => navigation.navigate('ClientAddressListScreen')}
            />
          </View>

        </View>
    </View>
  )
}
