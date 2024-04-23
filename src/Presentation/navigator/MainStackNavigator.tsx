import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { User } from '../../Domain/entities/User';
import { Category } from '../../Domain/entities/Category';
import { HomeScreen } from '../../../src/Presentation/views/home/Home';
import { RegisterScreen } from '../../../src/Presentation/views/register/Register';
import { RolesScreen } from '../../../src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from '../../../src/Presentation/navigator/AdminTabsNavigator';
import { ClientTabsNavigator } from '../../../src/Presentation/navigator/ClientTabsNavigator';
import { ProfileUpdateScreen } from '../../../src/Presentation/views/profile/update/ProfileUpdate';
import { UserProvider } from '../../../src/Presentation/context/UserContext';
import { DeliveryTabsNavigator } from './DeliveryTabsNavigator';
import { ShopTabsNavigator } from './ShopTabsNavigator';
import { Rol } from '../../Domain/entities/Rol';
import { RememberPasswordScreen } from '../views/remember_password/RememberPassword';

export type RootStackParamList={
    HomeScreen: undefined,
    
    RegisterScreen: undefined,
    RolesScreen: undefined,
    AdminTabsNavigator: undefined,
    ShopTabsNavigator: undefined,
    ClientTabsNavigator: undefined,
    DeliveryTabsNavigator: undefined,
    ProfileUpdateScreen: {user: User},
    RememberPasswordScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    
  return (
    <UserState>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen} 
          />

       

        

        <Stack.Screen name="RegisterScreen" 
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Registrate'
        }}/>
      
        <Stack.Screen name="RolesScreen" 
          component={RolesScreen}
          options={{
            headerShown: true,
            title: 'Seleccione un rol de usuario'
        }}/>

        <Stack.Screen name="RememberPasswordScreen" 
          component={RememberPasswordScreen}
          options={{
            headerShown: true,
            title: 'Recordar contraseña'
        }}/>

          <Stack.Screen
            name="AdminTabsNavigator"
            component={AdminTabsNavigator} 
          />

          <Stack.Screen
            name="ShopTabsNavigator"
            component={ShopTabsNavigator} 
          />

          <Stack.Screen
            name="ClientTabsNavigator"
            component={ClientTabsNavigator} 
          />
          <Stack.Screen
            name="DeliveryTabsNavigator"
            component={DeliveryTabsNavigator} 
          />

          <Stack.Screen
            name="ProfileUpdateScreen"
            component={ProfileUpdateScreen}
            options={{
              headerShown: true,
              title: 'Actualizar usuario'
          }} 
          /> 
        </Stack.Navigator>
      </UserState>
  )

}

const UserState = ({children}: any) =>{
    return(
      <UserProvider>
        {children}
      </UserProvider>
    )
  }
