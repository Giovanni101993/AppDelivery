import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { PaymentProvider } from '../context/PaymentContext';
import { Image, TouchableOpacity } from 'react-native';
import { RegisterDeliveryProvider } from '../context/RegisterDeliveryContext';
import { AdminDeliveryListScreen } from '../views/shop/register/list/DeliveryList';
import { User } from '../../Domain/entities/User';
import { StackScreenProps } from '@react-navigation/stack';
import { RegisterScreen } from '../views/register/Register';

export type RegisterDeliveryStackParamList = {
  AdminDeliveryListScreen: {user: User},
  RegisterScreen: {user: User}
}

interface Props extends StackScreenProps<RegisterDeliveryStackParamList, 'AdminDeliveryListScreen'>{};

const Stack = createNativeStackNavigator<RegisterDeliveryStackParamList>();

export const RegisterDeliveryNavigator = ({navigation, route}: Props) => {
  
  return (
    <RegisterDeliveryState>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>

            <Stack.Screen
              name="AdminDeliveryListScreen"
              component={AdminDeliveryListScreen}
              initialParams={{user: route.params?.user!}}
              options={ ({route, navigation}) => (
                {
                  headerShown: true,
                  title: 'Repartidores',
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                      <Image 
                        source={ require('../../../assets/add.png') }
                        style={{ width:35, height: 35 }}
                      />
                    </TouchableOpacity>
                  )
                }
            )}
            />
        </Stack.Navigator>
    </RegisterDeliveryState>
  )
}

const RegisterDeliveryState = ({children}: any) =>{
  return(
    <RegisterDeliveryProvider>
      {children}
    </RegisterDeliveryProvider>
  )
}