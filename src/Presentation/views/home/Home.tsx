import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import UseViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const {email, password, errorMessage, onChange, login, user} = UseViewModel();

    useEffect(() => {
        if (errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    
    useEffect(() => {
        if(user?.id !== null && user?.id !== undefined && user.id !== ''){
            if (user.roles?.length! > 1){
                navigation.replace('RolesScreen');
            }
            else{
                navigation.replace('ClientTabsNavigator');
            }
        }
    }, [user])
    

return (
    <View style={styles.container}>
        <Image
        source = { require('../../../../assets/fondo.jpg')}
        style = {styles.imageBackground}
        />

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/logo.png')}
            style={styles.logoImage}
            />
        <Text style={styles.logoText}>enviosYa</Text>
        </View>

        <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo electrónico'
            keyBoardtype='email-address'
            property='email'
            onChangeText={onChange}
            value= {email}
        />
        
        <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            keyBoardtype='default'
            property='password'
            onChangeText={onChange}
            value= {password}
            secureTextEntry={true}
        />

        <View style={{marginTop: 40}}>
            <RoundedButton text='ENTRAR' onPress={ () => login()}/>
        </View>

        <View style={styles.formRegister}>
            <Text>No tienes cuenta?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')}>
                <Text style={styles.formRegisterText}>Registrate</Text>
            </TouchableOpacity>
            
        </View>
        </View>
    </View>
    );
}


    
