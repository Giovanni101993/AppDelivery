import React, { useState, useEffect, useContext } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardType, ActivityIndicator, ToastAndroid, ScrollView } from 'react-native';
import styles from './Styles';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { PaymentStackParamList } from '../../../../navigator/AdminPaymentNavigator';
import { ModalPickImageQR } from '../../../../components/ModalPickQR';

interface Props extends StackScreenProps<PaymentStackParamList, 'AdminPaymentCreateScreen'>{};

export const AdminPaymentCreateScreen = () => {
 
  const [modalVisible, setModalVisible] = useState(false);
  const {codeQR, bank, phone, responseMessage, errorMessage, loading, onChange, pickImage, createPayment} = useViewModel();

  useEffect(() => {

    if(errorMessage !== ''){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

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
            source={{uri: codeQR}}
            style={styles.imageQR}
            />
            }

        <View style={styles.instruction}>
          <Text style={styles.instructionText}>CARGA TU CÓDIGO QR AQUÍ</Text>
        </View>
        </TouchableOpacity>
          
          
        <View style = {styles.form}>
          <ScrollView>

            <CustomTextInput
                placeholder='Entidad bancaría'
                image = {require('../../../../../../assets/bank.png')}
                keyboardType='default'
                property='bank'
                value = {bank}
                onChangeText={onChange}
                />
            <CustomTextInput
                placeholder='Número teléfonico asociado'
                image = {require('../../../../../../assets/phone.png')}
                keyboardType='default'
                property='phone'
                value = {phone}
                onChangeText={onChange}
                />

        <View style = {{marginTop: 50}}>
            <RoundedButton
                text = 'REGISTRAR'
                onPress={() => {createPayment()}}
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
  );
}
