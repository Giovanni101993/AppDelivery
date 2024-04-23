import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProfileInfoScreen } from "../views/profile/info/ProfileInfo";
import { ClientOrderListScreen } from "../views/client/order/list/OrderList";
import { Image } from "react-native";
import { ClientStackNavigator } from "./ClientStackNavigator";
import { ClientOrderStackNavigator } from "./ClientOrderStackNavigator";

const Tab = createBottomTabNavigator();

export const  ClientTabsNavigator = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="ClientStackNavigator" 
        component={ClientStackNavigator} 
        options={{
          title: 'Tiendas',
          tabBarLabel: 'Tiendas',
          headerShown:false,
          tabBarIcon: ({color}) =>(
            <Image
              source= { require('../../../assets/tienda.png')}
              style= {{width: 35, height:35}}
            />
          )  
        }}
      />

      <Tab.Screen 
        name="ClientOrderStackNavigator" 
        component={ClientOrderStackNavigator} 
        options={{
          headerShown: false,
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