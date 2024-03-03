import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { Image, TouchableOpacity } from "react-native";
import { DeliveryOrderStackNavigator } from "./DeliveryOrderStackNavigator";

const Tab = createBottomTabNavigator();

export const  DeliveryTabsNavigator = () =>{
  return (
   <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Tab.Screen 
        name="DeliveryOrderStackNavigator"
        component={DeliveryOrderStackNavigator}
        options={{
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({color}) =>(
           <Image
             source= { require('../../../assets/orders.png')}
             style= {{width: 25, height:25}}
            />
         )
        }} 
      />

      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen} 
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          headerShown: false,
          tabBarIcon: ({color}) =>(
           <Image
             source= { require('../../../assets/profile.png')}
             style= {{width: 30, height:30}}
            />
         )
        }} 
      />
    </Tab.Navigator>
  );
}