import React, { useEffect } from 'react'
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Styles';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '../../../../constants/GoogleMapApiKey';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';

interface Props extends StackScreenProps<ClientOrderStackParamList, 'ClientOrderMapScreen'>{};
export const ClientOrderMapScreen = ({navigation, route}: Props) => {

  const {order} = route.params;
  const {messaggePermissions, position, mapRef, origin, socket, destination, responseMessagge} = useViewModel(order);

  useEffect(() => {
    if(messaggePermissions!== ''){
      ToastAndroid.show(messaggePermissions,ToastAndroid.LONG);
    }
  }, [messaggePermissions])

  useEffect(() => {
    const unsuscribe = navigation.addListener('beforeRemove', () =>{
      socket.disconnect();
    });
    return unsuscribe;
  }, [navigation])
  
  useEffect(() => {
    if(responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  

  return (
    <View style= {styles.container}>

        <MapView
            ref = {mapRef}
            style= {styles.map}
            provider={PROVIDER_GOOGLE}
            zoomControlEnabled={true}
        >
          {
            position.latitude !== 0.0 &&
              <Marker coordinate={position}>

                <Image
                  style={styles.iconDelivery}
                  source={require('../../../../../../assets/delivery_pin.png')}
                />
              </Marker>              
          }
           {
            order.address !== undefined &&
              <Marker coordinate={{latitude:order.address.lat, longitude:order.address.lng}}>

                <Image
                  style={styles.iconDelivery}
                  source={require('../../../../../../assets/home.png')}
                />
              </Marker>              
          }

          {
            origin.latitude !== 0.0 &&
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="#18EC38"
            />
          }
        </MapView>

        <View style={styles.infoRoute}>
          <View style={styles.infoOrder}>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Barrio</Text>
              <Text style={styles.infoDescription}>{order.address?.neighborhood}</Text>
            </View>
              <Image
                style={styles.iconOrder}
                source={require('../../../../../../assets/barrio.png')}
              />
          </View>
        
          <View style={styles.infoOrder}>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Dirección</Text>
              <Text style={styles.infoDescription}>{order.address?.address}</Text>
            </View>
              <Image
                style={styles.iconOrder}
                source={require('../../../../../../assets/street.png')}
              />
          </View>

        <View style={styles.divider}></View>

        <View style={styles.infoClient}>
          <Image
            style={styles.imageClient}
            source={{uri: order.delivery?.image}}
            />
            <Text style={styles.nameClient}>{order.delivery?.name} {order.delivery?.lastname}</Text>
            <Image
              style={styles.iconPhone}
              source={require('../../../../../../assets/telephone.png')}
            />
        </View>
      </View>


        <TouchableOpacity style={styles.containerBack} onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              source={require('../../../../../../assets/back.png')}
            />
        </TouchableOpacity>
    </View>
  )
}
