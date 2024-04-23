import React from 'react'
import { Order } from '../../../../../Domain/entities/Order'
import { Text, View, StyleSheet } from 'react-native'
import { DateFormatter } from '../../../../utils/DateFormatter'
import { StackNavigationProp } from '@react-navigation/stack'
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator'
import { TouchableOpacity } from 'react-native';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator'

interface Props{
    order: Order,
    navigation: StackNavigationProp<DeliveryOrderStackParamList, 'DeliveryOrderListScreen', undefined>
}

export const OrderListItem = ({order, navigation}: Props) => {
  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('DeliveryOrderDetailScreen', {order: order})}
    >
        <View style={styles.container}>
            <Text style= {styles.order}>Orden #{order.id}</Text>
            <Text style={{...styles.info, marginTop:10}}>Fecha de pedido: {DateFormatter(order.timestamp!)}</Text>
            <Text style={styles.info}>Cliente: {order.client?.name} {order.client?.lastname}</Text>
            <Text style={styles.info}>Entregar en: {order.address?.address} - {order.address?.neighborhood}</Text>
            <View style={styles.divider}></View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20
    },
    order:{
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 10
    },
    divider:{
        height: 1,
        width: '100%',
        backgroundColor: '#B4B1B1',
        marginTop: 10
    },
    info:{
        fontSize: 13
    },
})
