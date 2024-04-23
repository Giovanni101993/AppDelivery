import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { PaymentProvider } from '../context/PaymentContext';
import { AdminPaymentListScreen } from '../views/admin/payment/list/PaymentList';

export type PaymentStackParamList = {
  AdminPaymentListScreen: undefined,
}

const Stack = createNativeStackNavigator<PaymentStackParamList>();

export const AdminPaymentNavigator = () => {

  return (
    <PaymentState>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>

            <Stack.Screen
              name="AdminPaymentListScreen"
              component={AdminPaymentListScreen}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'Reporte de ventas',
                }
            )}
            />


        </Stack.Navigator>
    </PaymentState>
  )
}

const PaymentState = ({children}: any) =>{
  return(
    <PaymentProvider>
      {children}
    </PaymentProvider>
  )
}