import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardType, ActivityIndicator, ToastAndroid, ScrollView } from 'react-native';
import styles from './Styles';
import { CustomTextInput } from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../../components/RoundedButton';
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressCreateScreen'>{};

export const ClientAddressCreateScreen = ({navigation, route}: Props) => {

  const {address, neighborhood, refPoint, responseMessage, loading, onChange, createAddress, onChangeRefPoint} = useViewModel();

  useEffect(() => {
    if(route.params?.refPoint){
      onChangeRefPoint(route.params?.refPoint, route.params?.latitude, route.params.longitude);
    }
  }, [route.params?.refPoint])
  
  
  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])
  
  return (
    <View style = {styles.container}>
        <TouchableOpacity 
            style = {styles.imageContainer}
            onPress={() => {}}
            >
          <Image
            style = {styles.image}
            source = {require('../../../../../../assets/map.png')}
            />
        </TouchableOpacity>

        <View style = {styles.form}>
            <ScrollView>
            <CustomTextInput
                placeholder='Dirección'
                image = {require('../../../../../../assets/house.png')}
                keyboardType='default'
                property='address'
                value = {address}
                onChangeText={onChange}
            />

            <CustomTextInput
                placeholder='Barrio'
                image = {require('../../../../../../assets/barrio.png')}
                keyboardType='default'
                property='neighborhood'
                value = {neighborhood}
                onChangeText={onChange}
            />
          <TouchableOpacity
            onPress={() => navigation.navigate('ClientAddressMapScreen')}
          >
            <CustomTextInput
                placeholder='Punto de referencia'
                image = {require('../../../../../../assets/pin.png')}
                keyboardType='default'
                property='refPoint'
                value = {refPoint}
                onChangeText={onChange}
                editable= {false}
            />
          </TouchableOpacity>
        <View style={{marginTop: 50}}>
            <RoundedButton
                text = 'CREAR DIRECCIÓN'
                onPress={() => {createAddress()}}
                />
        </View>
          </ScrollView>
      </View>

        
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
