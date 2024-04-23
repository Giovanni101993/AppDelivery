import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import useViewModel from './ViewModel';
import { AddressListItem } from './Item';
import { useEffect } from 'react';
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { User } from '../../../../../Domain/entities/User';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressListScreen'>{};

export const ClientAddressListScreen = ({navigation, route}: Props) => {

  const {address, checked, responseMessagge, changeRadioValue, createOrder} = useViewModel();

  useEffect(() => {
    if(responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  

  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      <View style={styles.title}>
            <Text style={styles.textTitle}>Selecciona tu ubicación</Text>
        </View>
      <FlatList
        data={address}
        keyExtractor={(item) => item.id!}
        renderItem={({item}) => 
          <AddressListItem 
            address={item} 
            checked={checked}
            changeRadioValue={changeRadioValue}
          />

        }
      />
          <View style={styles.buttonAddress}>
            {/*<RoundedButton  onPress = {() => createOrder()} text='CONTINUAR'/>*/}
            <RoundedButton  onPress = {() => navigation.navigate('ClientPaymentFormScreen')} text='CONTINUAR'/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
 
  title:{
      alignItems: 'center',
      marginVertical: 20
  },
  textTitle:{
      fontSize: 20,
      fontWeight: 'bold'
  },
  buttonAddress:{
    width:'100%',
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})