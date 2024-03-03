import React, { useEffect } from 'react'
import { FlatList, Text, View, useWindowDimensions } from 'react-native'
import useViewModel from './ViewModel';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { MyColors } from '../../../../theme/AppTheme';
import { OrderListItem } from './Item';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';


interface Props {
  status: string
}

const OrderListView = ({status}: Props) => {

  const {ordersPayed, ordersDispatched, ordersOnTheWay,ordersDelivery, user, getOrders} = useViewModel();
  const navigation = useNavigation<StackNavigationProp<ClientOrderStackParamList, 'ClientOrderListScreen'>>();

  useEffect(() => {
    getOrders(user?.id!, status)
  }, [user])
  

  
  return (
    <View>
        <FlatList style={{marginTop:10}}
          data= {
            status === 'PAGADO'
            ?ordersPayed
            :status === 'DESPACHADO'
            ? ordersDispatched
            : status === 'EN CAMINO'
            ? ordersOnTheWay
            : status === 'ENTREGADO'
            ? ordersDelivery
            :[]
          }
          keyExtractor={(item) => item.id!}
          renderItem={({item}) => <OrderListItem order={item} navigation={navigation}/>}
        />
    </View>
  )
}

const renderScene = ({ route }: any) => {
  switch (route.key) {
    case 'first':
      return <OrderListView status='PAGADO' />;
    case 'second':
      return <OrderListView status='DESPACHADO' />;
    case 'third':
      return <OrderListView status='EN CAMINO' />;
    case 'fourth':
      return <OrderListView status='ENTREGADO' />;
    default:
      return <OrderListView status='DESPACHADO' />;
  }
};

export const ClientOrderListScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'PAGADO' },
    { key: 'second', title: 'DESPACHADO' },
    { key: 'third', title: 'EN CAMINO' },
    { key: 'fourth', title: 'ENTREGADO' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle= {{backgroundColor: 'black'}}
          activeColor='black'
          inactiveColor='gray'
          scrollEnabled={true}
          style={{backgroundColor: MyColors.primary, marginTop:35, height: 70, alignItems:'center'}}
        />
      )}
    />
  );
}
