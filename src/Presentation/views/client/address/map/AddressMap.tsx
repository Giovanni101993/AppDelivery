import React, { useEffect } from 'react'
import { Image, Text, ToastAndroid, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Styles';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressMapScreen'>{};
export const ClientAddressMapScreen = ({navigation, route}: Props) => {

  const {messaggePermissions, position, mapRef, name, latitude, longitude, onRegionChangeComplete} = useViewModel();

  useEffect(() => {
    if(messaggePermissions!== ''){
      ToastAndroid.show(messaggePermissions,ToastAndroid.LONG);
    }
  }, [messaggePermissions])
  
  return (
    <View style= {styles.container}>

        <MapView
            ref = {mapRef}
            style= {styles.map}
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={(region) => {
              onRegionChangeComplete(region.latitude, region.longitude);
            }}
        />
        <Image
          style={styles.location}
          source={require('../../../../../../assets/location.png')}
        />

        <View style={styles.refPoint}>
          <Text style={styles.refPointText}>{name}</Text>
        </View>

        <View style={styles.buttonRefPoint}>
          <RoundedButton
            text= 'SELECCIONAR PUNTO'
            onPress={() => {
              navigation.navigate({
              name: 'ClientAddressCreateScreen',
              merge: true,
              params: {refPoint: name, latitude: latitude, longitude: longitude}
            })
            }}
          />
        </View>
    </View>
  )
}
