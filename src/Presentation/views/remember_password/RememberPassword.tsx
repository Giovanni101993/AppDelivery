import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import UseViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import { Rol } from '../../../Domain/entities/Rol';

interface Props extends StackScreenProps<RootStackParamList, 'RememberPasswordScreen'>{};

export const RememberPasswordScreen = ({navigation, route}: Props) => {

    const {email, errorMessage, onChange, remember} = UseViewModel();

    useEffect(() => {
        if (errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    

return (
    <View style={styles.container}>
        

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/domiiBig.png')}
            style={styles.logoImage}
            />
        
        </View>

        <View style={styles.form}>
        <Text style={styles.formText}>RECORDAR CONTRASEÑA</Text>

        <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
            value= {email}
            autoCapitalizeKeyboard={true}
        />
        <View style={{marginTop: 40}}>
            <RoundedButton text='ENVIAR CORREO' onPress={ () => remember}/>
        </View>
</View>
    </View>
    );
}


    
