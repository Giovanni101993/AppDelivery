import React, {useState} from 'react'
import { View, Text, Image, TextInput, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native'
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
export const RegisterScreen = () => {

  const {name, lastname, email, phone, password, confirmPassword, onChange, register} = useViewModel();
  
  return (
    <View style={styles.container}>
        <Image
        source = { require('../../../../assets/fondo.jpg')}
        style = {styles.imageBackground}
        />

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/user_image.png')}
            style={styles.logoImage}
            />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
        </View>

    <View style={styles.form}>
      <Text style={styles.formText}>REGISTRARSE</Text>

      <CustomTextInput
        placeholder='Nombres'
        keyBoardtype='default'
        image={require('../../../../assets/user.png')}
        property='name'
        onChangeText={onChange}
        value={name}
      /> 

      <CustomTextInput
        placeholder='Apellidos'
        keyBoardtype='default'
        image={require('../../../../assets/my_user.png')}
        property='lastname'
        onChangeText={onChange}
        value={lastname}
      />

      <CustomTextInput
        placeholder='Correo electrónico'
        keyBoardtype='email-address'
        image={require('../../../../assets/email.png')}
        property='email'
        onChangeText={onChange}
        value={email}
      /> 

      <CustomTextInput
        placeholder='Celular'
        keyBoardtype='default'
        image={require('../../../../assets/phone.png')}
        property='phone'
        onChangeText={onChange}
        value={phone}
      /> 

      <CustomTextInput
        placeholder='Contraseña'
        keyBoardtype='default'
        image={require('../../../../assets/password.png')}
        property='password'
        onChangeText={onChange}
        value={password}
        secureTextEntry={true}
      /> 
        
      <CustomTextInput
        placeholder='Confirmar contraseña'
        keyBoardtype='default'
        image={require('../../../../assets/password.png')}
        property='confirmPassword'
        onChangeText={onChange}
        value={confirmPassword}
        secureTextEntry={true}
      /> 

      <View style={{marginTop: 30}}>
          <RoundedButton text='REGISTRAR' onPress={ () => register()}/>
      </View>

      </View>
    </View>
    );
}

