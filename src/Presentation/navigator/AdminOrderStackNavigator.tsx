import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductNavigator } from './AdminProductNavigator';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { AdminOrderDetailScreen } from '../views/admin/order/detail/OrderDetail';
import { Order } from '../../Domain/entities/Order';
import { OrderProvider } from '../context/OrderContext';

export type AdminOrderStackParamList = {
    AdminOrderListScreen: {isUpdate: boolean} | undefined,
    AdminOrderDetailScreen: {order: Order},
}

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();

export const AdminOrderStackNavigator = () => {
  return (
    <OrderStatus>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

            <Stack.Screen
              name="AdminOrderListScreen"
              component={AdminOrderListScreen}
            />

            <Stack.Screen
              name="AdminOrderDetailScreen"
              component={AdminOrderDetailScreen}
              options={{
                headerShown: true,
                title: 'Detalle de la orden'
              }}
            />

        </Stack.Navigator>
    </OrderStatus>
  )
}

const OrderStatus = ({children}: any) =>{
  return(
    <OrderProvider>
      {children}
    </OrderProvider>
  )
}