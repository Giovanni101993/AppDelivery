import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text, ToastAndroid, ActivityIndicator } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import useViewModel from './ViewModel';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors } from '../../../../theme/AppTheme';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentInstallmentsScreen'>{};

export const ClientPaymentInstallmentsScreen = ({navigation, route}: Props) => {

    const {cardToken} = route.params;
    const {open, value, items, setOpen, setValue, setItems, loading, responseMessage, paymentData, createPayment, getInstallments} = useViewModel(cardToken);

    useEffect(() => {
      getInstallments();
    }, [])

    useEffect(() => {
     if (paymentData !== null && paymentData !== undefined) {
      navigation.replace('ClientPaymentStatusScreen', {paymentData: paymentData})
     }
    }, [paymentData])
    

    useEffect(() => {
      if (responseMessage !== '') {
        ToastAndroid.show(responseMessage, ToastAndroid.LONG);
      }
    }, [responseMessage])
    console.log('PAYMEnT: ', JSON.stringify(getInstallments));

  return (
    <View style={styles.container}>
      <Text style={styles.numberInstallments}>Elige el número de cuotas</Text>
      <View style={styles.dropDownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton text="PAGAR" onPress={() => createPayment()} />
      </View>
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color={MyColors.primary}
          />
        )}
    </View>
  );
}
