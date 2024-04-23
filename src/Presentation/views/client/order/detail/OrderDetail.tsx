import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, ToastAndroid } from 'react-native'
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { OrderDetailItem } from './Item';
import { DateFormatter } from '../../../../utils/DateFormatter';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';


interface Props extends StackScreenProps<ClientOrderStackParamList, 'ClientOrderDetailScreen'>{};

export const ClientOrderDetailScreen = ({navigation, route}: Props) => {

  const {order} = route.params;
  const {total, responseMessagge, getTotal,  updateToOnTheWayOrder} = useViewModel(order);

  useEffect(() => {
    if(responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  

  useEffect(() => {
    if(total === 0){
        getTotal();
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => <OrderDetailItem product={item}/>}
        />
      </View>

      <View style={styles.infoProducts}>
        <View style={styles.infoOrder}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Fecha del pedido</Text>
            <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)}</Text>
          </View>
            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/calendar.png')}
            />
        </View>

        <View style={styles.infoOrder}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Repartidor</Text>
            <Text style={styles.infoDescription}>{order.delivery?.name!} {order.delivery?.lastname!}</Text>
            <View style={styles.phone}>
            <Image
              style={styles.iconPhone}
              source={require('../../../../../../assets/telephone.png')}
            />
            <Text style={styles.infoDescription}> {order.delivery?.phone}</Text>
            </View>
          </View>
            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/delivery.png')}
            />
        </View>

        <View style={styles.infoOrder}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Dirección de entrega</Text>
            <Text style={styles.infoDescription}>{order.address?.address!}</Text>
          <Text style={styles.infoDescription}>{order.address?.neighborhood!}</Text>
          </View>

            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/pin.png')}
            />
        </View>

        <View style={styles.totalInfo}>
          <Text style={styles.infoPrice}>TOTAL: ${total}</Text>
          <View style={styles.button}>
        
            {order.status === 'EN CAMINO' &&
              <RoundedButton
              text='RASTREAR PEDIDO'
              onPress={() => navigation.navigate('ClientOrderMapScreen', {order: order})}
            />}
          </View>
        </View>
      </View>
    </View>
  )
}

