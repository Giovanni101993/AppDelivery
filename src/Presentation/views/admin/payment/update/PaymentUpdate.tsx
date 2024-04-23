import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardType, ActivityIndicator, ToastAndroid, ScrollView } from 'react-native';
import styles from './Styles';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';
import { PaymentStackParamList } from '../../../../navigator/AdminPaymentNavigator';
import { ModalPickImageQR } from '../../../../components/ModalPickQR';

interface Props extends StackScreenProps<PaymentStackParamList, 'AdminPaymentUpdateScreen'>{};

export const AdminPaymentUpdateScreen = ({navigation, route}: Props) => {

  const {user, payment} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const {bank, phone, responseMessage, loading, codeQR, onChange, pickImage, updatePayment} = useViewModel(payment);
  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  
  return (
    <View style = {styles.container}>
      
      
        <TouchableOpacity 
            style = {styles.imageContainer}
            onPress={() => setModalVisible(true)}
        >
            {
              codeQR == ''
              ? 
              <Image
                style = {styles.image}
                source = {require('../../../../../../assets/codigo_qr.png')}
              />
            : <Image
                source={{uri: payment.codeQR}}
                style={styles.image}
              />
            }
        </TouchableOpacity>

        <View style = {styles.form}>
          <ScrollView>

            <CustomTextInput
                placeholder='Nombre de la entidad bancaria'
                image = {require('../../../../../../assets/bank.png')}
                keyBoardtype='default'
                property='bank'
                value = {bank}
                onChangeText={onChange}
                />

            <CustomTextInput
                placeholder='Número telefónico asociado a la cuenta'
                image = {require('../../../../../../assets/phone.png')}
                keyBoardtype='default'
                property='phone'
                value = {phone}
                onChangeText={onChange}
                />
        <View style = {{marginTop: 45}}>
            <RoundedButton
                text = 'MODIFICAR CÓDIGO'
                onPress={() => {updatePayment()}}
                />
        </View>
                </ScrollView>
        </View>

        <ModalPickImageQR
          openGallery={pickImage}
          modalUseState={modalVisible}
          setModalUseState={setModalVisible}
        />
          {
            loading &&
            <ActivityIndicator 
              style = {MyStyles.loading} 
              size="large" 
              color= {MyColors.primary} 
            />
          }

    </View>
  )
}
