import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import UseViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import { Rol } from '../../../Domain/entities/Rol';
import * as Notifications from 'expo-notifications';
import { NotificationPush } from '../../utils/NotificationPush';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge : false
  }),
});

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

export const HomeScreen = ({navigation, route}: Props) => {

    const {email, password, errorMessage, onChange, loginStore, login, user, updateNotificationToken} = UseViewModel();

    const { notification, notificationListener, responseListener, registerForPushNotificationsAsync, setNotification} = NotificationPush();

    useEffect(() => {
        if (errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    
   /*useEffect(() => {
        if(user?.id !== null && user?.id !== undefined && user.id !== ''){
            if (user.roles?.length! > 1){
                navigation.replace('RolesScreen');
            }
            else if(user.rol.name== 'TIENDA'){
                navigation.replace('ShopTabsNavigator');
            }
            else{
                navigation.replace('ClientTabsNavigator');
            }
        }
    }, [user])*/
    
    useEffect(() => {
    
        if (user && user.roles && user.roles.length === 4) {
            navigation.replace('RolesScreen');
        } else if (user && user.roles && user.roles.length > 0) {
            const userRole = user.roles[0].name; // Suponiendo que cada usuario solo tenga un rol
    
            
            registerForPushNotificationsAsync()
        .then(token =>{
            console.log('TOKEN: '+ token);
            updateNotificationToken(user?.id!, token!)
            if (userRole === 'REPARTIDOR') {
                navigation.replace('DeliveryTabsNavigator');
            } else if (userRole === 'CLIENTE'){
                navigation.replace('ClientTabsNavigator');
            }else if (userRole === 'TIENDA'){
                navigation.replace('ShopTabsNavigator')
            }
        });
  
      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });
  
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
  
      return () => {
        notificationListener.current &&
          Notifications.removeNotificationSubscription(
            notificationListener.current,
          );
        responseListener.current &&
          Notifications.removeNotificationSubscription(responseListener.current);
      };
        }
        
    }, [user]);

return (
    <View style={styles.container}>
        

        <View style={styles.logoContainer}>
        <Image
            source={require('../../../../assets/domiiBig.png')}
            style={styles.logoImage}
            />
        
        </View>

        <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
            value= {email}
            autoCapitalizeKeyboard={true}
        />
        
        <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='Contraseña'
            keyboardType='default'
            property='password'
            onChangeText={onChange}
            value= {password}
            secureTextEntry={true}
        />

        <View style={{marginTop: 40}}>
            <RoundedButton text='ENTRAR' onPress={ () => login()}/>
        </View>

        
            <TouchableOpacity onPress={()=> navigation.navigate('RememberPasswordScreen')}>
                <Text style={styles.forgottPassword}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

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


    
