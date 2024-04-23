import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import styles from './Styles';
import { RoundedButton } from '../../../../components/RoundedButton';
interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentStatusScreen'>{};

export const ClientPaymentStatusScreen = ({navigation, route}: Props) => {

  const {paymentData} = route.params
  return (
    <View style={styles.container}>
      {
        paymentData.status === 'approved'
        ?<Image
          style={styles.image}
          source={require('../../../../../../assets/checked.png')}
        />
        :
        <Image
          style={styles.image}
          source={require('../../../../../../assets/cancel.png')}
        />
      }
      {
        paymentData.status === 'approved'
        ?
        <Text style={styles.description}>Tu orden fue procesada exitosamente usando {paymentData.payment_method_id} ****{paymentData.card.last_four_digits}</Text>
        :<Text style={styles.description}>La transacción no fue aprobada</Text>
      }
      {
        paymentData.status === 'approved' &&
        <Text style={styles.info}>Mira el estado de tus pedidos en la sección de MIS PEDIDOS</Text>
      }

      <View style={styles.button}>
        <RoundedButton text='FINALIZAR COMPRA' onPress={() => navigation.replace('ClientStoreListScreen')}/>
      </View>
    </View>
  )
}
