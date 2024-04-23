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


interface Props extends StackScreenProps<AdminOrderStackParamList, 'AdminOrderDetailScreen'>{};

export const AdminOrderDetailScreen = ({navigation, route}: Props) => {

  const {order} = route.params;
  const {total, deliveryMen, responseMessagge, open, value, items, getTotal, getDeliveryMen, setOpen, setValue, setItems, dispatchOrder} = useViewModel(order);

  useEffect(() => {
    if(responseMessagge !== ''){
      ToastAndroid.show(responseMessagge, ToastAndroid.LONG);
    }
  }, [responseMessagge])
  

  useEffect(() => {
    if(total === 0){
        getTotal();
    }
    console.log('Repartidor', getDeliveryMen);
    
    getDeliveryMen();
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
            <Text style={styles.infoDescription}>{order.address?.address!} - {order.address?.neighborhood!}</Text>
          </View>
            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/pin.png')}
            />
        </View>

        {
        order.status === 'PAGADO' 
          
          ? <View>
              <Text style={styles.delivery}>REPARTIDORES DISPONIBLES</Text>
              <View >
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
            </View>
          
          : <View style={styles.infoOrder}>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Repartidor asignado</Text>
            <Text style={styles.infoDescription}>{order.delivery?.name!} {order.delivery?.lastname!}</Text>
            <View style={styles.phone}>
              <Image
                style={styles.iconPhone}
                source={require('../../../../../../assets/telephone.png')}
              />
              <Text style={styles.infoDescription}> {order.delivery?.phone!}</Text>
            </View>
            
          </View>
            <Image
              style={styles.iconOrder}
              source={require('../../../../../../assets/delivery.png')}
            />
            
        </View>
        
        }

        <View style={styles.totalInfo}>
          <Text style={styles.infoPrice}>TOTAL: ${total}</Text>
          <View style={styles.button}>
            {order.status === 'PAGADO' &&
              <RoundedButton
              text='DESPACHAR ORDEN'
              onPress={() => dispatchOrder()}
            />}
          </View>
        </View>
      </View>
    </View>
  )
}

