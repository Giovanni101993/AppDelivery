import { FlatList, StyleSheet, Text, View } from 'react-native'
import useViewModel from './ViewModel';
import { AddressListItem } from './Item';

export const ClientAddressListScreen = () => {

  const {address, checked, changeRadioValue} = useViewModel();
  
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
  }
})