import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, ToastAndroid } from 'react-native'
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { OrderDetailItem } from './Item';
import { DateFormatter } from '../../../../utils/DateFormatter';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';
import { Order } from '../../../../../Domain/entities/Order';


interface Props extends StackScreenProps<DeliveryOrderStackParamList, 'DeliveryOrderDetailScreen'>{};

export const DeliveryOrderDetailScreen = ({navigation, route}: Props) => {

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
            <Text style={styles.infoTitle}>Cliente</Text>
            <Text style={styles.infoDescription}>{order.client?.name!} {order.client?.lastname!}</Text>
            <View style={styles.phone}>
            <Image
              style={styles.iconPhone}
              source={require('../../../../../../assets/telephone.png')}
            />
            <Text style={styles.infoDescription}> {order.client?.phone}</Text>
            </View>
          </View>
            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/user.png')}
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
            {order.status === 'DESPACHADO' &&
              <RoundedButton
              text='INICIAR ENTREGA'
              onPress={() => updateToOnTheWayOrder()}
            />}
            {order.status === 'EN CAMINO' &&
              <RoundedButton
              text='SEGUIR RUTA'
              onPress={() => navigation.navigate('DeliveryOrderMapScreen', {order: order})}
            />}
          </View>
        </View>
      </View>
    </View>
  )
}

