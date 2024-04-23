import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";
import { ShoppingBagProvider } from "../context/ShoppingBagContext";
import { Image, TouchableOpacity } from "react-native";
import { ClientShoppingBagScreen } from "../views/client/shopping_bag/ShoppingBag";
import { ClientAddressListScreen } from "../views/client/address/list/AddressList";
import { ClientAddressCreateScreen } from "../views/client/address/create/AddressCreate";
import { ClientAddressMapScreen } from "../views/client/address/map/AddressMap";
import { ClientPaymentFormScreen } from '../views/client/payment/form/PaymentForm';
import { Payment } from "../../Domain/entities/Payment";
import { ClientStoreListScreen } from "../views/client/stores/list/StoreList";
import { User } from "../../Domain/entities/User";
import { ClientPaymentInstallmentsScreen } from "../views/client/payment/installments/PaymentInstallments";
import { ResponseMercadoPagoCardToken } from '../../Data/sources/remote/models/ResponseMercadoPagoCardToken';
import { ClientPaymentStatusScreen } from "../views/client/payment/status/PaymentStatus";
import { ResponseMercadoPagoPayment } from "../../Data/sources/remote/models/ResponseMercadoPagoPayment";

export type ClientStackParamList = {
    //ClientCategoryListScreen: undefined,
    ClientStoreListScreen: undefined,
    ClientProductListScreen: {idCategory: string},
    ClientProductDetailScreen: {product: Product},
    ClientShoppingBagScreen: undefined,
    ClientAddressListScreen: {user: User, payment: Payment} | undefined,
    ClientAddressCreateScreen: {refPoint: string, latitude: number, longitude: number} | undefined,
    ClientAddressMapScreen: undefined,
    ClientPaymentFormScreen: undefined,
    ClientPaymentInstallmentsScreen: {cardToken: ResponseMercadoPagoCardToken},
    ClientPaymentStatusScreen: {paymentData: ResponseMercadoPagoPayment},
}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () =>{
    return(
        <ShoppingBagState>

            <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen
                    name='ClientStoreListScreen'
                    component={ClientStoreListScreen}
                    options={ ({route, navigation}) => (
                        {
                          headerShown: true,
                          title: 'Tiendas',
                          headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                              <Image 
                                source={ require('../../../assets/add_cart.png') }
                                style={{ width: 50, height: 50 }}
                              />
                            </TouchableOpacity>
                          )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductListScreen'
                    component={ClientProductListScreen}
                    options={ ({route, navigation}) => (
                        {
                          headerShown: true,
                          title: 'Productos',
                          headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                              <Image 
                                source={ require('../../../assets/add_cart.png') }
                                style={{ width: 50, height: 50 }}
                              />
                            </TouchableOpacity>
                          )
                        }
                    )}
                />

                <Stack.Screen
                    name='ClientProductDetailScreen'
                    component={ClientProductDetailScreen}
                />

                <Stack.Screen
                    name='ClientShoppingBagScreen'
                    component={ClientShoppingBagScreen}
                    options={{
                        title: 'Mi pedido',
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ClientAddressListScreen'
                    component={ClientAddressListScreen}
                    options={ ({route, navigation}) => (
                      {
                        headerShown: true,
                        title: 'Direcciones',
                        headerRight: () => (
                          <TouchableOpacity onPress={() => navigation.navigate('ClientAddressCreateScreen')}>
                            <Image 
                              source={ require('../../../assets/add.png') }
                              style={{ width:35, height: 35 }}
                            />
                          </TouchableOpacity>
                        )
                      }
                    )}
                />

                <Stack.Screen
                    name='ClientAddressCreateScreen'
                    component={ClientAddressCreateScreen}
                    options={{
                        title: 'Direcciones',
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ClientAddressMapScreen'
                    component={ClientAddressMapScreen}
                    options={{
                        title: 'Ubica tu dirección',
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ClientPaymentFormScreen'
                    component={ClientPaymentFormScreen}
                    options={{
                        title: 'Formulario de pago',
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ClientPaymentInstallmentsScreen'
                    component={ClientPaymentInstallmentsScreen}
                    options={{
                        title: 'Número de cuotas',
                        headerShown: true
                    }}
                />

                <Stack.Screen
                    name='ClientPaymentStatusScreen'
                    component={ClientPaymentStatusScreen}
                />
            </Stack.Navigator>
        </ShoppingBagState>
    )
}

const ShoppingBagState = ({children}: any) => {
    return(
        <ShoppingBagProvider>
            {children}
        </ShoppingBagProvider>
    )
}

